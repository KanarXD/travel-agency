CREATE USER travel_agency WITH PASSWORD 'prolog';
CREATE DATABASE travel_agency_db;
GRANT ALL PRIVILEGES ON DATABASE travel_agency_db TO travel_agency;

\connect travel_agency_db travel_agency;

CREATE TABLE privileges
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE roles
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE roles_privileges
(
    role      INTEGER NOT NULL REFERENCES roles,
    privilege INTEGER NOT NULL REFERENCES roles,
    PRIMARY KEY (role, privilege)
);

CREATE TABLE employees
(
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(20) NOT NULL,
    surname         VARCHAR(20) NOT NULL,
    employment_date DATE        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    login           VARCHAR(20) NOT NULL,
    password        VARCHAR(20) NOT NULL,
    role            INTEGER     NOT NULL REFERENCES roles
);

CREATE TABLE customers
(
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(20) NOT NULL,
    surname VARCHAR(20) NOT NULL
);

CREATE TABLE offers
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(30)   NOT NULL,
    base_price NUMERIC(8, 2) NOT NULL,
    start_date DATE          NOT NULL,
    end_date   DATE          NOT NULL
);

CREATE TABLE reservations
(
    id                    SERIAL PRIMARY KEY,
    offer_id              INTEGER   NOT NULL REFERENCES offers,
    customer_id           INTEGER   NOT NULL REFERENCES customers,
    reservation_timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
