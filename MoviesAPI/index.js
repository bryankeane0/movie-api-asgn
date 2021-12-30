import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres'
import usersRouter from './api/users';
import './db';
import './seedData';
import authenticate from './authenticate';
import passport from './authenticate';

dotenv.config();
const app = express();
const port = process.env.PORT;
const errHandler = (err, req, res, next) => {
  if(process.env.NODE_ENV === 'production')
    return res.status(500).send(`Something went wrong!`);
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};
app.use(passport.initialize());
app.use('/api/genres', genresRouter);
app.use('/api/users', usersRouter);
app.use(express.json());
app.use(errHandler);
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.listen(port, () => {
  console.info(`Server running at ${port}`);
});