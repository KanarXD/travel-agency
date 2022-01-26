\connect travel_agency_db travel_agency;

-- LOYALTY PROGRAMS
INSERT INTO loyalty_programs(name, discount, threshold)
VALUES ('NONE', 0, 0);

INSERT INTO loyalty_programs(name, discount, threshold)
VALUES ('BRONZE', 5, 5);

INSERT INTO loyalty_programs(name, discount, threshold)
VALUES ('SILVER', 10, 10);

INSERT INTO loyalty_programs(name, discount, threshold)
VALUES ('GOLD', 20, 20);

-- CUSTOMERS
INSERT INTO customers(name, surname, loyalty_program_id)
VALUES ('TOMASZ', 'KOWALSKI', (SELECT id FROM loyalty_programs ORDER BY id LIMIT 1));

INSERT INTO customers(name, surname, loyalty_program_id)
VALUES ('JAREK', 'PEPKO', (SELECT id FROM loyalty_programs ORDER BY id LIMIT 1));

INSERT INTO customers(name, surname, loyalty_program_id)
VALUES ('ADAM', 'BEDNAREK', (SELECT id FROM loyalty_programs ORDER BY id LIMIT 1));

-- PROMOTIONS
INSERT INTO promotions(name, start_date, end_date, discount)
VALUES ('Promocja wiosenna', '2022-03-21', '2022-06-21', 8);

INSERT INTO promotions(name, start_date, end_date, discount)
VALUES ('Promocja letnia', '2022-06-22', '2022-09-22', 12);

INSERT INTO promotions(name, start_date, end_date, discount)
VALUES ('Promocja jesienna', '2022-09-23', '2022-12-21', 5);

INSERT INTO promotions(name, start_date, end_date, discount)
VALUES ('Promocja zimowa', '2022-12-22', '2023-03-20', 8);

-- HOTELS
INSERT INTO hotels(name, location)
VALUES ('Sheraton', 'Poznań');
INSERT INTO hotels(name, location)
VALUES ('Gołębieski', 'Mikołajki');
INSERT INTO hotels(name, location)
VALUES ('Super hotel', 'Antarktyda');

-- CARRIERS
INSERT INTO carriers(name)
VALUES ('Bus');
INSERT INTO carriers(name)
VALUES ('Plane');
INSERT INTO carriers(name)
VALUES ('Taxi');
INSERT INTO carriers(name)
VALUES ('Train');

-- OFFERS
INSERT INTO offers(name, base_price, price, start_date, end_date, hotel_id, carrier_id)
VALUES ('SUPER OFERTA', 2235.50, 2235.50, '2022-01-01', '2022-01-06', 1, 1);

INSERT INTO offers(name, base_price, price, start_date, end_date, hotel_id)
VALUES ('ZŁA OFERTA', 22345.50, 22345.50, '2022-02-01', '2022-02-16', 1);

INSERT INTO offers(name, base_price, price, start_date, end_date, carrier_id)
VALUES ('NIEZŁA OFERTA', 235.50, 235.50, '2022-01-03', '2022-01-06', 1);

INSERT INTO offers(name, base_price, price, start_date, end_date, hotel_id, carrier_id)
VALUES ('SUPER OFERTA', 2235.50, 2235.50, '2022-01-01', '2022-01-06', 2, 1);

INSERT INTO offers(name, base_price, price, start_date, end_date, hotel_id, carrier_id)
VALUES ('ZŁA OFERTA', 22345.50, 22345.50, '2022-02-01', '2022-02-16', 3, 1);

INSERT INTO offers(name, base_price, price, start_date, end_date, hotel_id, carrier_id)
VALUES ('NIEZŁA OFERTA', 235.50, 235.50, '2022-01-03', '2022-01-06', 3, 3);

-- EMPLOYEES
INSERT INTO employees(name, surname, login, password, role)
VALUES ('BOB', 'BOBOWSKI', 'bob', 'bobspassword', (SELECT id FROM roles WHERE name = 'AGENT'));

INSERT INTO employees(name, surname, login, password, role)
VALUES ('ADMIN', 'ADMIN', 'admin', 'adminspassword', (SELECT id FROM roles WHERE name = 'ADMIN'));

