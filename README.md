## Endpoints

Contained are 2 APIS, one for accessing and performing CRUD operations with Users, and another for accessing and performing CRUD operations with Classes.

What follows are how you can interact with the APIs and what you can expect.

//////////////////////

BASE URL: 

CLASSES ENDPOINTS: /api/classes

///////////

[GET] get all classes

Send GET request to /api/classes

Returns: 

///////////

[GET] get class by classId

Send GET request to /api/classes/:classId, passing through a classId

Returns:

///////////

[PUT] update class by classId

Send PUT request to /api/classes/:classId, passing through an updated class

Requires: 

Takes: 

Returns: 

///////////

[POST] create new class

Send POST request to /api/classes, passing through a new class

Requires: 

Takes: 

Returns: 

///////////

[DELETE] delete existing class by classId

////////////////////

END CLASSES ENDPOINTS

////////////////////

////////////////////

START USERS ENDPOINTS

BASE URL: 

USERS ENDPOINTS: /api/users

///////////

[GET] get all users

Send GET request to /api/users

Returns: 

///////////

[GET] get user by userId

Send GET request to /api/users/:userId, passing through a userId

Returns: 

///////////

[POST] register a new user

Send POST request to /api/users/register, passing through a new user

Requires: 

Returns: 

///////////

[POST] login with existing user

Send POST request to /api/users/login, passing through an existing user

Requires: 

Returns: 

////////////////////

## Scripts

- **start**: Runs the app.
- **server**: Runs the app with Nodemon.
- **migrate**: Migrates the local development database to the latest.
- **rollback**: Rolls back migrations in the local development database.
- **seed**: Truncates all tables in the local development database, feel free to add more seed files.
- **test**: Runs tests.
- **deploy**: Deploys the main branch to Heroku.
- **migrateh**: Migrates the Heroku database to the latest.
- **rollbackh**: Rolls back migrations in the Heroku database.
- **databaseh**: Interact with the Heroku database from the command line using psql.
- **seedh**: Runs all seeds in the Heroku database.

## Hot Tips

- Figure out the connection to the database and deployment before writing any code.

- If you need to make changes to a migration file that has already been released to Heroku, follow this sequence:

  1. Roll back migrations in the Heroku database
  2. Deploy the latest code to Heroku
  3. Migrate the Heroku database to the latest

- If your frontend devs are clear on the shape of the data they need, you can quickly build provisional endpoints that return mock data. They shouldn't have to wait for you to build the entire backend.

- Keep your endpoints super lean: the bulk of the code belongs inside models and other middlewares.

- Validating and sanitizing client data using a library is much less work than doing it manually.

- Revealing crash messages to clients is a security risk, but during development it's helpful if your frontend devs are able to tell you what crashed.

- PostgreSQL comes with [fantastic built-in functions](https://hashrocket.com/blog/posts/faster-json-generation-with-postgresql) for hammering rows into whatever JSON shape.

- If you want to edit a migration that has already been released but don't want to lose all the data, make a new migration instead. This is a more realistic flow for production apps: prod databases are never migrated down. We can migrate Heroku down freely only because there's no valuable data from customers in it. In this sense, Heroku is acting more like a staging environment than production.
