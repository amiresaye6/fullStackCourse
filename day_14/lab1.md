# Backend Fundamentals Lab — Build Your First Express API

## Lab Goal

In this lab, you will build your first backend API using:

- Node.js
- Express.js

You will practice:

- creating a backend project
- installing dependencies
- creating an Express server
- handling GET and POST requests
- sending JSON responses
- validating incoming data
- testing APIs using Postman or Thunder Client

---

# What You Are Building

You will build a simple products API with authentication.

Your backend should support:

## Routes

### GET `/products`
Returns all products

### POST `/products`
Adds a new product

### POST `/login`
Checks username and password

---

# Important Rules

- Store products in a local array
- DO NOT use a database
- Use Express.js
- Use JSON responses
- Use proper status codes
- Validate incoming data

---

# Step 1 — Create Project Folder

Create a new folder for the project.

Open terminal and run:

```bash
mkdir backend-lab
cd backend-lab
````

---

# Step 2 — Initialize Node.js Project

Run:

```bash
npm init -y
```

This should create:

```text
package.json
```

---

# Step 3 — Install Express

Install Express.js using npm.

Command:

```bash
npm install express
```

---

# Step 4 — Create app.js

Create a file named:

```text
app.js
```

---

# Step 5 — Import Express

Inside `app.js`:

* import Express
* create the Express app
* enable JSON middleware

IMPORTANT:
Without the JSON middleware:

```js
req.body
```

will not work correctly.

---

# Step 6 — Create Local Products Array

Create a local array to store products.

Example idea:

```js
const products = [];
```

IMPORTANT:
Data will reset whenever the server restarts.

That is normal for this lab.

---

# Step 7 — Create Basic Server

Make the server run on:

```text
PORT 1234
```

When the server starts, print a message in the terminal.

Example idea:

```text
server is running on port 1234
```

---

# Step 8 — Create GET /products Route

Create a route with:

## Method

```text
GET
```

## Path

```text
/products
```

---

# Route Requirements

This route should:

* return all products
* return total number of products
* send JSON response
* return status code:

```text
200 OK
```

---

# Expected Response Shape

Example structure:

```json
{
    "message": "...",
    "total": 0,
    "products": []
}
```

You can customize the message text.

---

# Step 9 — Create POST /products Route

Create a route with:

## Method

```text
POST
```

## Path

```text
/products
```

This route should add a new product to the array.

---

# Product Data Requirements

Each product should contain:

```json
{
    "title": "Laptop",
    "price": 25000
}
```

---

# Validation Rules

If:

* title is missing
* OR price is missing

Return:

## Status Code

```text
400 Bad Request
```

## Response Example

```json
{
    "message": "title and price are required"
}
```

---

# Successful Product Creation

If product data is valid:

* add product to array
* return success response
* return status code:

```text
201 Created
```

---

# Step 10 — Create POST /login Route

Create a route with:

## Method

```text
POST
```

## Path

```text
/login
```

---

# Login Rules

Use these fixed credentials inside your backend:

## Username

```text
amiralsayed
```

## Password

```text
123456789
```

---

# Validation Rules

If:

* username is missing
* OR password is missing

Return:

## Status Code

```text
400 Bad Request
```

---

# Incorrect Credentials

If username or password is incorrect:

Return:

## Status Code

```text
401 Unauthorized
```

---

# Successful Login

If login is successful:

Return:

* success message
* fake token
* fake user object

Example response shape:

```json
{
    "message": "...",
    "token": "...",
    "user": {}
}
```

---

# Step 11 — Test Your API

Use:

* Postman
  OR
* Thunder Client

Test all routes carefully.

---

# Routes To Test

## GET `/products`

Should return:

* empty array at first
* added products later

---

## POST `/products`

Test:

* valid product
* missing title
* missing price

---

## POST `/login`

Test:

* correct credentials
* wrong credentials
* missing fields

---

# Example Request Bodies

## Add Product

```json
{
    "title": "Laptop",
    "price": 25000
}
```

---

## Login

```json
{
    "userName": "amiralsayed",
    "password": "123456789"
}
```

---

# Common Mistakes

## 1. Forgetting express.json()

Problem:

```js
req.body === undefined
```

---

## 2. Forgetting To Send Response

If you forget:

* `res.send()`
* OR `res.json()`

The request will keep loading forever.

---

## 3. Wrong HTTP Method

Examples:

```text
Cannot GET /login
```

or

```text
Cannot POST /products
```

---

## 4. Server Not Running

Make sure you started the server correctly.

---

# Bonus Challenges

## Challenge 1

Add IDs to products automatically.

---

## Challenge 2

Validate:

* price must be a number
* title must be at least 3 characters

---

# Final Goal

By the end of this lab, you should understand:

* how backend APIs work
* how requests and responses work
* how Express routes work
* how frontend communicates with backend
* how basic backend validation works

