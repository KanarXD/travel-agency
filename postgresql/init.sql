CREATE USER travel_agency WITH PASSWORD 'prolog';
CREATE DATABASE travel_agency_db;
GRANT ALL PRIVILEGES ON DATABASE travel_agency_db TO travel_agency;

\connect travel_agency_db travel_agency;

CREATE TABLE customers
(
    id      BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START 1 INCREMENT BY 1),
    name    VARCHAR(20) NOT NULL,
    surname VARCHAR(20) NOT NULL
);

CREATE TABLE offers
(
    id         BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY (START 1 INCREMENT BY 1),
    name       VARCHAR(30)   NOT NULL,
    base_price NUMERIC(8, 2) NOT NULL,
    start_date DATE          NOT NULL,
    end_date   DATE          NOT NULL
);

CREATE TABLE reservations
(
    offer_id              BIGINT REFERENCES offers,
    customer_id           BIGINT REFERENCES offers,
    reservation_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (offer_id, customer_id, reservation_timestamp)
);

