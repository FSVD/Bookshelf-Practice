# Library API

Multiprocess MVC RESTful API for library management.<br>
Manage authors, books and genres.
<br><br>

## Built With:
Node JS<br>
Express<br>
Bookshelf ORM<br>
MySQL<br>

## Installing:
1) Create a new schema in your MySQL DDBB named "library".
2) Install Knex dependency in global mode via npm in order to access to Knex cli > npm install -g knex.<br>
3) Create a .env file in the project root folder with variables listed in the next section and change values with your db user and pwd.
4) Install project dependencies > "npm install".
5) Run project > "npm start".
6) Open yuor web browser and go to "localhost:4200" 

## Environment variables
NODE_ENV=development<br>
DEVELOPMENT_DB_NAME=library<br>
DEVELOPMENT_DB_USER={ your database user }<br>
DEVELOPMENT_DB_PASSWORD={ your database password }<br>
STAGING_DB_NAME=library<br>
STAGING_DB_USER={ your database user }<br>
STAGING_DB_PASSWORD={ your database password }<br>
PRODUCTION_DB_NAME=library<br>
PRODUCTION_DB_USER={ your database user }<br>
PRODUCTION_DB_PASSWORD={ your database password }<br>
PORT=4200<br>