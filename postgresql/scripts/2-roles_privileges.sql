\connect travel_agency_db travel_agency;

INSERT INTO roles(name)
VALUES ('AGENT');
INSERT INTO roles(name)
VALUES ('MANAGER');
INSERT INTO roles(name)
VALUES ('ADMIN');

INSERT INTO privileges(name)
VALUES ('READ_EMPLOYEES');
INSERT INTO privileges(name)
VALUES ('DELETE_EMPLOYEES');

INSERT INTO privileges(name)
VALUES ('READ_OFFERS');
INSERT INTO privileges(name)
VALUES ('DELETE_OFFERS');

INSERT INTO roles_privileges(role, privilege)
VALUES ((SELECT id FROM roles WHERE name = 'AGENT'),
        (SELECT id FROM privileges WHERE name = 'READ_OFFERS'));

INSERT INTO roles_privileges(role, privilege)
VALUES ((SELECT id FROM roles WHERE name = 'MANAGER'),
        (SELECT id FROM privileges WHERE name = 'READ_OFFERS'));

INSERT INTO roles_privileges(role, privilege)
VALUES ((SELECT id FROM roles WHERE name = 'MANAGER'),
        (SELECT id FROM privileges WHERE name = 'DELETE_OFFERS'));


