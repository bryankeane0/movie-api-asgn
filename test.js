import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import moviesRouter from './api/movies';
import './db'
import './seedData'
import usersRouter from './api/users';
import reviewsRouter from './api/reviews'
import session from 'express-session';
import authenticate from './authenticate';
import passport from './authenticate';



const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error :+1::+1:. Here's the details: ${err.stack} `);
};
import genresRouter from './api/genres'

dotenv.config();
const app = express();
const morgan = require('morgan')
const swaggerUi  = require('swagger-ui-express')
const swaggerJSDoc=require('swagger-jsdoc')


morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
   
  ].join(' ')
})


const swaggerOptions={
  swaggerDefinition:{
    info:{
      title:'Movies Api',
      description:'Movie API info',
      contact:{
        name:'Dominik'
      },
      servers:["http://localhost:8080"]
    }
  },
  apis:['index.js','../MoviesAPI/api/users/index.js','../MoviesAPI/api/movies/index.js','../MoviesAPI/api/reviews/index.js']
};
const swaggerDocs = swaggerJSDoc(swaggerOptions)

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))

// swagger schema swagger definition


// use helmet 


const port = process.env.PORT;
// Add middleware
app.use(helmet())
app.use(morgan('tiny'));
app.use(express.json());
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter)
app.use('/api/genres', genresRouter);


app.use('/api/users', usersRouter);
app.use('/api/reviews',reviewsRouter)
app.use(errHandler);
// Start server
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});