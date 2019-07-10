# Library API

Multiprocess MVC RESTful API for library management.<br>
Manage authors, books and genres.<br>

## Key features:
Clustering (Multiprocess), Pre-validation, Multiview

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
6) Open yuor web browser and go to "http://localhost:4200" 

## Environment variables
NODE_ENV=development<br>

PORT=4200<br>

DEVELOPMENT_DB_NAME=library<br>
DEVELOPMENT_DB_USER={ your database user }<br>
DEVELOPMENT_DB_PASSWORD={ your database password }<br>

STAGING_DB_NAME=library<br>
STAGING_DB_USER={ your database user }<br>
STAGING_DB_PASSWORD={ your database password }<br>

PRODUCTION_DB_NAME=library<br>
PRODUCTION_DB_USER={ your database user }<br>
PRODUCTION_DB_PASSWORD={ your database password }<br>

## Mock data
Use "Library-API-Mocks.sql" file to populate your database.

## Requests examples
```
Get author info:
localhost:4200/author/1

Get author' books:
localhost:4200/author/1/books

Get book info:
localhost:4200/book/1

Get book genres:
localhost:4200/genres

Get books by genre:
localhost:4200/genre/1/books/
```