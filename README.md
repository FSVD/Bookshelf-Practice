# Bookshelf-Practice

A multi-process NodeJS API wich use Bookshelf ORM based on Knex query builder for relational DDBB.
<br><br>

### Development stack:
Node
Express
Bookshelf ORM
MySQL

### Bookshelf usage:

1) Create a new schema in your DDBB (name: bookshelf-practice).
2) Configure knexfile.js with your DDBB data.

### Steps:

1) Install Knex via npm in global mode in order to access to Knex cli. (npm install -g knex).<br>
2) Change package.json to install dependency for your DB (MySQL in this case).<br>
3) Install project dependencies (npm install).
4) Create a .env file in the project root folder. 
4) Run project "npm start".

### .env file variables

NODE_ENV=development<br>
DEVELOPMENT_DB_NAME=bookshelf-practice<br>
DEVELOPMENT_DB_USER={ your database user }<br>
DEVELOPMENT_DB_PASSWORD={ your database password }<br>
STAGING_DB_NAME=bookshelf-practice<br>
STAGING_DB_USER={ your database user }<br>
STAGING_DB_PASSWORD={ your database password }<br>
PRODUCTION_DB_NAME=bookshelf-practice<br>
PRODUCTION_DB_USER={ your database user }<br>
PRODUCTION_DB_PASSWORD={ your database password }<br>
PORT=4200<br>