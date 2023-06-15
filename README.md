# nlu_project

## Setup


#### Backend:

Install dependencies:

```
npm install
```

Create .env file in the root directory and provide values for the following environment variables:

```
PGDATABASE='flavors_app'
PGUSER='postgres'
PGPASSWORD='password'
PGHOST='localhost'
```

Create database schema - schema is located at `src/db/setup/schema.sql`

```
CREATE DATABASE flavors_app;

CREATE TABLE IF NOT EXISTS flavor_category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS flavor (
    id SERIAL PRIMARY KEY,
    flavor_category_id REFERENCES flavor_category,
    name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS quote (
    capability VARCHAR(255),
    comments VARCHAR(255),
    email VARCHAR(255),
    name VARCHAR(255),
    newsletter BOOLEAN
)
```

Seed the database:
```
npm run seed
```

