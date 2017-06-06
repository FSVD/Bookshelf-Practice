# Bookshelf ORM practice

NodeJS ORM for relational database based on Knex query builder.
<br><br>
### STEPS:

1) Create a new schema in your DDBB.
2) Create knexfile.js - cmd> knex init.
3) Configure knexfile.js.
4) Create a connection file database (e.g. db.js) (this file will runs migration and create db tables).
5) Create a variable in the application file (e.g. app.js or index.js) requiring the connection file database to run the db when our server starts up.
6) Create a migration schema file - cmd> knex migrate:make <schema' name>.
7) Configure migration schema designing tables and relations.
8) Run app and have fun.

##### REQUIREMENTS:

Install Knex via npm in global mode in order to access to Knex cli<br>
Install Bookshelf ORM<br>
Install dependency for your DB (MySQL in this case) via npm.