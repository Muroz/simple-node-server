# Simple Node Server

NodeJS (express) setup connected to a mongodb to carry out CRUD operations on a person model. It includes a mongo instance to store any data and a mongo-express instance to manipulate the database directly

# Usage:

To run this server locally you can run: 

`docker-compose up`

Which will create a server instance (on port 8080 unless specified otherwise on the .env), a mongo instance (on port 27017 unless a different one is specified on the compose file) and a mongo-express instance (on port 8081 unless a different one is specified on the compose file) which is an interface to connect directly to the db.

Alternatively, you can use your own mongo db instance, pass its url through the `MONGO_URL` .env variable and run the server with:

`npm run start // or dev`
