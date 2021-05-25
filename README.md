## Endpoints

Contained are 2 APIS, one for accessing and performing CRUD operations with Users, and another for accessing and performing CRUD operations with Classes.

What follows are how you can interact with the APIs and what you can expect. Endpoints marked with [todo] are not yet completed.

//////////////////////

BASE URL: https://anywhere-fitness-2021.herokuapp.com/

CLASSES ENDPOINTS: /api/classes

///////////

[GET] get all classes

Send GET request to /api/classes

Returns: An array of objects, each object being a class

///////////

[GET] get class by classId

Send GET request to /api/classes/:classId, passing through a classId parameter

Returns: An object representing the class searched for

///////////

[PUT] update class by classId

Send PUT request to /api/classes/:classId, passing through an updated class in the body along with a classId parameter

Requires: { name }

Takes: { name, type, startTime, duration, intensityLevel, location, attendees, maxClassSize }

Returns: An object representing the updated class

///////////

[POST] create new class

Send POST request to /api/classes, passing through a new class in the body

Requires: { name }

Takes: { name, type, startTime, duration, intensityLevel, location, attendees, maxClassSize }

Returns: An object representing the newly created class

///////////

[DELETE] delete existing class by classId

Send DELETE request to /api/classes/:classId, passing through a classId parameter

Returns: An object representing the deleted class

////////////////////

END CLASSES ENDPOINTS

////////////////////

////////////////////

START USERS ENDPOINTS

BASE URL: https://anywhere-fitness-2021.herokuapp.com/

USERS ENDPOINTS: /api/users

///////////

[GET] get all users

Send GET request to /api/users

Returns: An array of objects, each object being a user

///////////

[GET] get user by userId

Send GET request to /api/users/:userId, passing through a userId parameter

Returns: An object representing the user searched for

///////////

[POST] register a new user

Send POST request to /api/users/register, passing through a new user in the body

Requires: { username, password, role }

Takes: { username, password, role, skip }

Returns: An object representing the newly created user

///////////

[POST] login with existing user

Send POST request to /api/users/login, passing through an existing user in the body

Requires: { username, password }

Returns: An object containing an authorization token along with a customized welcome message

////////////////////

## Database Schemas

The description of the structure and extra information about each resource stored in our database is listed below.

#### Users

| Field       | Data Type | Metadata                                                                    
| ----------- | --------- | --------------------------------------------------------------------------- |
| userId      | integer   | do not provide it when creating users, the database will generate it        |
| username    | string    | required, must be unique, char limit of 200                                 |
| password    | string    | required, must be at least 4 chars, char limit of 200                       |
| role        | string    | required ('Client' or 'Instructor'), char limit of 200                      |
| skip        | boolean   | defaults to false (this determines if onboarding is skipped)                |

#### Classes

| Field          | Data Type | Metadata                                                                     
| -----------    | --------- | --------------------------------------------------------------------------------------------- |
| classId        | integer   | do not provide it when creating classes, the database will generate it                        |
| name           | string    | required, char limit of 200                                                                   |
| type           | string    | char limit of 200                                                                             |
| startTime      | string    | char limit of 200                                                                             |
| duration       | string    | char limit of 200                                                                             |
| intensityLevel | string    | char limit of 200                                                                             |
| location       | string    | char limit of 200                                                                             |
| attendees      | integer   | min of 0, max of 100, defaults to 0 (number of people signed up for the class)                |
| maxClassSize   | integer   | min of 0, max of 100, defaults to 20 (maximum number of people who can sign up for the class) |

////////////////////

## Test Data

I have populated the database with test data for both Users and Classes, so feel free to use the endpoints to interact with the database however you see fit. I will not add authorization requirements to restricted API operations until later on in the week (to make testing easier for the front end).
