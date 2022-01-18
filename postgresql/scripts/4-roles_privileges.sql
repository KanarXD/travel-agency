\connect travel_agency_db travel_agency;

-- ROLES
INSERT INTO roles(name)
VALUES ('AGENT');
INSERT INTO roles(name)
VALUES ('MANAGER');
INSERT INTO roles(name)
VALUES ('ADMIN');

-- PRIVILEGES

-- EMPLOYEES PRIVILEGES
INSERT INTO privileges(name)
VALUES ('EMPLOYEES_READ');
INSERT INTO privileges(name)
VALUES ('EMPLOYEES_UPDATE');
INSERT INTO privileges(name)
VALUES ('EMPLOYEES_DELETE');

-- OFFERS PRIVILEGES
INSERT INTO privileges(name)
VALUES ('OFFERS_READ');
INSERT INTO privileges(name)
VALUES ('OFFERS_UPDATE');
INSERT INTO privileges(name)
VALUES ('OFFERS_DELETE');

-- CUSTOMERS PRIVILEGES
INSERT INTO privileges(name)
VALUES ('CUSTOMERS_READ');
INSERT INTO privileges(name)
VALUES ('CUSTOMERS_UPDATE');
INSERT INTO privileges(name)
VALUES ('CUSTOMERS_DELETE');

-- RESERVATIONS PRIVILEGES
INSERT INTO privileges(name)
VALUES ('RESERVATIONS_READ');
INSERT INTO privileges(name)
VALUES ('RESERVATIONS_UPDATE');
INSERT INTO privileges(name)
VALUES ('RESERVATIONS_DELETE');

-- LOYALTY PROGRAMS PRIVILEGES
INSERT INTO privileges(name)
VALUES ('LOYALTY_PROG_READ');
INSERT INTO privileges(name)
VALUES ('LOYALTY_PROG_UPDATE');
INSERT INTO privileges(name)
VALUES ('LOYALTY_PROG_DELETE');

-- ROLES AND PRIVILEGES

-- AGENT PRIVILEGES
CALL add_privilege_to_role('AGENT', 'OFFERS_READ');
CALL add_privilege_to_role('AGENT', 'RESERVATIONS_READ');
CALL add_privilege_to_role('AGENT', 'RESERVATIONS_UPDATE');
CALL add_privilege_to_role('AGENT', 'RESERVATIONS_DELETE');
CALL add_privilege_to_role('AGENT', 'CUSTOMERS_READ');
CALL add_privilege_to_role('AGENT', 'CUSTOMERS_UPDATE');
CALL add_privilege_to_role('AGENT', 'CUSTOMERS_DELETE');
CALL add_privilege_to_role('AGENT', 'LOYALTY_PROG_READ');

-- MANAGER PRIVILEGES
CALL transfer_role_privileges('AGENT', 'MANAGER');

CALL add_privilege_to_role('MANAGER', 'OFFERS_UPDATE');
CALL add_privilege_to_role('MANAGER', 'OFFERS_DELETE');
CALL add_privilege_to_role('MANAGER', 'EMPLOYEES_READ');
CALL add_privilege_to_role('MANAGER', 'LOYALTY_PROG_UPDATE');
CALL add_privilege_to_role('MANAGER', 'LOYALTY_PROG_DELETE');

-- ADMIN
CALL transfer_role_privileges('MANAGER', 'ADMIN');

CALL add_privilege_to_role('ADMIN', 'EMPLOYEES_UPDATE');
CALL add_privilege_to_role('ADMIN', 'EMPLOYEES_DELETE');
