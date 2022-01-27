\connect travel_agency_db travel_agency;

-- LOYALTY PROGRAMS
INSERT INTO loyalty_programs(name, discount, threshold)
VALUES ('BRONZE', 5, 5);

INSERT INTO loyalty_programs(name, discount, threshold)
VALUES ('SILVER', 10, 10);

INSERT INTO loyalty_programs(name, discount, threshold)
VALUES ('GOLD', 20, 20);

-- CUSTOMERS
INSERT INTO customers(name, surname)
VALUES ('ABRAHAM', 'VINCENT');

INSERT INTO customers(name, surname)
VALUES ('FRED', 'GRIFFIN');

INSERT INTO customers(name, surname)
VALUES ('EMILEE', 'CLEMENTS');

INSERT INTO customers(name, surname)
VALUES ('ALEX', 'NELSON');

INSERT INTO customers(name, surname)
VALUES ('FRANK', 'ZAMORA');

INSERT INTO customers(name, surname)
VALUES ('ANNA-MARIE', 'HASSAN');

-- PROMOTIONS
INSERT INTO promotions(name, start_date, end_date, discount)
VALUES ('SPRING PROMOTION', '2022-03-21', '2022-06-21', 8);

INSERT INTO promotions(name, start_date, end_date, discount)
VALUES ('SUMMER PROMOTION', '2022-06-22', '2022-09-22', 12);

INSERT INTO promotions(name, start_date, end_date, discount)
VALUES ('FALL PROMOTION', '2022-09-23', '2022-12-21', 5);

INSERT INTO promotions(name, start_date, end_date, discount)
VALUES ('WINTER PROMOTION', '2022-12-22', '2023-03-20', 8);

-- HOTELS
INSERT INTO hotels(name, location)
VALUES ('PLEASANT PLAINS HOTEL', 'NANTES, FRANCE');
INSERT INTO hotels(name, location)
VALUES ('UTOPIA HOTEL', 'POZNAŃ, POLAND');
INSERT INTO hotels(name, location)
VALUES ('TWIN FJORD HOTEL', 'BERGEN, NORWAY');
INSERT INTO hotels(name, location)
VALUES ('SHORELINE RESORT', 'KOŁOBRZEG, POLAND');

-- CARRIERS
INSERT INTO carriers(name)
VALUES ('BUS');
INSERT INTO carriers(name)
VALUES ('PLANE');
INSERT INTO carriers(name)
VALUES ('TRAIN');

-- OFFERS
INSERT INTO offers(name, base_price, price, start_date, end_date, hotel_id, carrier_id)
VALUES ('WINTER HOLIDAY', 2459.50, 2459.50, '2022-02-01', '2022-02-06', 3, 2);

INSERT INTO offers(name, base_price, price, start_date, end_date, hotel_id, carrier_id)
VALUES ('CROISSANT & BAGUETTE', 2635.50, 2635.50, '2022-04-30', '2022-05-07', 1, 2);

INSERT INTO offers(name, base_price, price, start_date, end_date, promotion_id, hotel_id, carrier_id)
VALUES ('SEA & SAND', 1835.50, 1688.66, '2022-05-01', '2022-05-06', 1, 4, 3);

INSERT INTO offers(name, base_price, price, start_date, end_date, hotel_id, carrier_id)
VALUES ('FALL IN LOVE IN POLAND', 1665.50, 1665.50, '2022-06-25', '2022-07-01', 4, 1);

INSERT INTO offers(name, base_price, price, start_date, end_date, promotion_id, hotel_id, carrier_id)
VALUES ('WINE & JOY', 2235.50, 1967.24, '2022-07-10', '2022-07-15', 2, 1, 2);

INSERT INTO offers(name, base_price, price, start_date, end_date, hotel_id)
VALUES ('PEACE & BEAUTY', 1235.50, 1235.50, '2022-08-05', '2022-08-12', 2);

INSERT INTO offers(name, base_price, price, start_date, end_date, carrier_id)
VALUES ('AROUND EUROPE', 5235.50, 5235.50, '2022-08-10', '2022-08-24', 1);

INSERT INTO offers(name, base_price, price, start_date, end_date, promotion_id, hotel_id)
VALUES ('GOLDEN TIME', 1180.50, 1121.48 , '2022-10-11', '2022-11-16', 3, 2);

INSERT INTO offers(name, base_price, price, start_date, end_date, promotion_id, hotel_id, carrier_id)
VALUES ('MAGIC OF NORWAY', 2875.50, 2645.46, '2022-12-25', '2023-01-02', 4, 3, 2);

-- EMPLOYEES
INSERT INTO employees(name, surname, login, password, role)
VALUES ('JEFFERY', 'BANNISTER', 'jeff', 'jeffp', (SELECT id FROM roles WHERE name = 'AGENT'));

INSERT INTO employees(name, surname, login, password, role)
VALUES ('TOM', 'REEVE', 'tom', 'tomp', (SELECT id FROM roles WHERE name = 'AGENT'));

INSERT INTO employees(name, surname, login, password, role)
VALUES ('DORIAN', 'VINCENT', 'dorian', 'dorianp', (SELECT id FROM roles WHERE name = 'AGENT'));

INSERT INTO employees(name, surname, login, password, role)
VALUES ('FRED', 'HORTON', 'fred', 'fredp', (SELECT id FROM roles WHERE name = 'MANAGER'));

INSERT INTO employees(name, surname, login, password, role)
VALUES ('ADMIN', 'ADMIN', 'admin', 'adminp', (SELECT id FROM roles WHERE name = 'ADMIN'));

-- RESERVATIONS
INSERT INTO reservations(offer_id, customer_id, price)
VALUES (3, 1, 1688.66);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (1, 3, 2459.50);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (9, 3, 2645.46);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (2, 4, 2635.50);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (5, 4, 1967.24);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (4, 6, 1665.50);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (3, 1, 1688.66);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (1, 2, 2459.50);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (3, 2, 1688.66);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (4, 2, 1665.50);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (6, 2, 1235.50);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (8, 2, 1121.48);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (9, 2, 2513.19);

INSERT INTO reservations(offer_id, customer_id, price)
VALUES (5, 5, 1967.24);