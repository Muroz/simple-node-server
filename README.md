# Simple Node Server

NodeJS (express) setup connected to a mongodb to carry out CRUD operations on a person model.

# Usage:

To run this server locally you can run: 

`docker-compose up`

Which will create a server instance (on port 8080 unless specified otherwise on the .env), a mongo instance (on port 27017 unless a different one is specified on the compose file) and a mongo-express instance (on port 8081) which is an interface to connect directly to the db.

Alternatively, you can use your own mongo db instance, pass its url through the `MONGO_URL` .env variable and run the server with:

`npm run start // or dev`

# Packages and tools used

## Tools:

### ESLint:

Standard linting solution for both js and ts projects since tslint was deprecated a couple years ago. Using the airbnb config (eslint-config-airbnb-base) as a base for the rules.

## Packages:

### Helmet:

Convenient package to add base security to the server by adding headers to block the most common types of vulnerabilities
