# Bookshelf-Practice

A multi-process NodeJS API wich use Bookshelf ORM based on Knex query builder for relational DDBB such as MySQL and MariaDB.
<br><br>

### Development stack:
Node<br>
Express<br>
Bookshelf ORM<br>
MySQL<br>

### Steps:

1) Create a new schema in your DDBB (name: bookshelf-practice).
2) Install Knex dependency in global mode via npm in order to access to Knex cli. (npm install -g knex).<br>
3) Create a .env file in the project root folder with variables listed in the next section and change values with your db user and pwd.
4) Install project dependencies (npm install).
5) Run project "npm start".

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