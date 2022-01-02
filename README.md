# Web App Dev 2: Web API Labs

Practical labs for the WAD2 module, BSc. Applied/Software Systems Dev/Forensics  # Assignment 2 - Web API.

Name: Bryan Keane

## Features.
 
 + Feature 1 - User authentication, login and signup.
 + Feature 2 - API Routes for extra app pages.

## Installation Requirements

```bat
$ git clone https://github.com/bryankeane0/movie-api-asgn.git
```

followed by installation

```bat
$ cd MoviesApp/
$ npm install
$ cd ..
$ cd ReactApp/
$ npm install
```

## API Configuration

```bat
REACT_APP_TMDB_KEY=<yourtmdbkey>
NODE_ENV=development
FAST_REFRESH=false
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/movies_db
seedDb=false
secret=ilikecake
```

## API Design
| ROUTE | GET | POST | PUT | DELETE |
| /api/movies | Gets a list of movies | N/A | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A |
| /api/movies/upcoming | Get upcoming movies | N/A | N/A | N/A |
| /api/movies/trending | Get trending movies | N/A | N/A | N/A |
| /api/movies/now-playing | Get now playing movies | N/A | N/A | N/A |

## Security and Authentication
+ JWT Tokens for login authentication.

## Integrating with React App
~~~Javascript
export const getMovies = () => {
    return fetch(
        '/api/movies',
        {headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }).then(res => res.json());
};

export const getNowPlaying = () => {
    return fetch(
        '/api/movies/now-playing',
        {headers: {
            'Authorization': window.localStorage.getItem('token')
        }
    }).then(res => res.json());
};
~~~
