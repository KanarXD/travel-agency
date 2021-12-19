\connect travel_agency_db travel_agency;

INSERT INTO customers(name, surname)
VALUES ('TOMASZ', 'KOWALSKI');

INSERT INTO customers(name, surname)
VALUES ('JAREK', 'PEPKO');

INSERT INTO customers(name, surname)
VALUES ('ADAM', 'BEDNAREK');

INSERT INTO offers(name, base_price, start_date, end_date)
VALUES ('SUPER OFERTA', 2235.50, '2022-01-01', '2022-01-06');

INSERT INTO employees(name, surname, login, password, role)
VALUES ('BOB', 'BOBOWSKI', 'bob', 'bobspassword', (SELECT id FROM roles WHERE name = 'AGENT'));

INSERT INTO employees(name, surname, login, password, role)
VALUES ('ADMIN', 'ADMIN', 'admin', 'adminspassword', (SELECT id FROM roles WHERE name = 'ADMIN'));