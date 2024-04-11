# Welcome to flights service 

## Project setup
- clone the project on your local
- execute `npm install` on the same path as of your root directory of the downloaded project
- create a `.env` file in the root directory and add the following environment variable
  - `PORT=3000`
-inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <your database login name>,
    "password": <your database password>,
    "database": "Flights_search_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```