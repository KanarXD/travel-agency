\connect travel_agency_db travel_agency;

INSERT INTO loyalty_programs(name, discount, threshold, hierarchy)
VALUES ('NONE', 0, 0, 0);

INSERT INTO loyalty_programs(name, discount, threshold, hierarchy)
VALUES ('BRONZE', 5, 5, 1);

INSERT INTO loyalty_programs(name, discount, threshold, hierarchy)
VALUES ('SILVER', 10, 10, 2);

INSERT INTO loyalty_programs(name, discount, threshold, hierarchy)
VALUES ('GOLD', 20, 20, 3);

INSERT INTO customers(name, surname, loyalty_program_id)
VALUES ('TOMASZ', 'KOWALSKI', (SELECT id FROM loyalty_programs WHERE hierarchy = 0));

INSERT INTO customers(name, surname, loyalty_program_id)
VALUES ('JAREK', 'PEPKO', (SELECT id FROM loyalty_programs WHERE hierarchy = 0));

INSERT INTO customers(name, surname, loyalty_program_id)
VALUES ('ADAM', 'BEDNAREK', (SELECT id FROM loyalty_programs WHERE hierarchy = 0));

INSERT INTO hotels(name, location)
VALUES ('Sheraton', 'Poznań');

INSERT INTO hotels(name, location)
VALUES ('Gołębieski', 'Mikołajki');

INSERT INTO hotels(name, location)
VALUES ('Super hotel', 'Antarktyda');

INSERT INTO carriers(name)
VALUES ('Bus');

INSERT INTO carriers(name)
VALUES ('Plane');

INSERT INTO carriers(name)
VALUES ('Taxi');

INSERT INTO carriers(name)
VALUES ('Train');

INSERT INTO offers(name, base_price, start_date, end_date, hotel_id, carrier_id)
VALUES ('SUPER OFERTA', 2235.50, '2022-01-01', '2022-01-06', 1, 1);

INSERT INTO offers(name, base_price, start_date, end_date, hotel_id)
VALUES ('ZŁA OFERTA', 22345.50, '2022-02-01', '2022-02-16', 1);

INSERT INTO offers(name, base_price, start_date, end_date, carrier_id)
VALUES ('NIEZŁA OFERTA', 235.50, '2022-01-03', '2022-01-06', 1);

INSERT INTO offers(name, base_price, start_date, end_date, hotel_id, carrier_id)
VALUES ('SUPER OFERTA', 2235.50, '2022-01-01', '2022-01-06', 2, 1);

INSERT INTO offers(name, base_price, start_date, end_date, hotel_id, carrier_id)
VALUES ('ZŁA OFERTA', 22345.50, '2022-02-01', '2022-02-16', 3, 1);

INSERT INTO offers(name, base_price, start_date, end_date, hotel_id, carrier_id)
VALUES ('NIEZŁA OFERTA', 235.50, '2022-01-03', '2022-01-06', 3, 3);

INSERT INTO employees(name, surname, login, password, role)
VALUES ('BOB', 'BOBOWSKI', 'bob', 'bobspassword', (SELECT id FROM roles WHERE name = 'AGENT'));

INSERT INTO employees(name, surname, login, password, role)
VALUES ('ADMIN', 'ADMIN', 'admin', 'adminspassword', (SELECT id FROM roles WHERE name = 'ADMIN'));
