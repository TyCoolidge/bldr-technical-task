# Marketplaces & Platforms

A basic peer-to-peer marketplace for renting items.

## Technologies

- Node.js
- Express
- Swagger
- Joi
- Nodemon
- Moment

  <!-- - Jest -->
  <!-- - Supertest -->

## Setup

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

server will be running on `http://localhost:8100` by default

## Usage & API Documentation

Use the Swagger UI to interact with the API directly or Postman to test the endpoints:
The Database is stored in the `db` folder of the project as a JSON file with values for reference.

NOTE: Make sure server is running before using Swagger UI or Postman.

- Swagger UI: `http://localhost:8100/api-docs`
- Postman: `https://www.postman.com/`

## Solution & Approach

- I built this backend using a MVC-like architecture as I find it easier to manage and understand.
- You will notice the following specific folders:

- `controllers` for the business logic
- `routes` for the api routes
- `schemas` for the validation schemas
- `middleware` for the validation middleware

- Within each route I decided to use a validation middleware via the JOI library. This ensures that the request query, body and params are correct before even reaching the controller while providing a clear error messages.
- You will notice that in the PUT requests, I create a deep copy of the item to avoid mutating the original item and mimic how typical backend databases work.
- I tried to make api responses as clear and concise as possible since I always disliked unclear error messages. This is why I chose to use Swaggger to give the api a sort of professional look.
