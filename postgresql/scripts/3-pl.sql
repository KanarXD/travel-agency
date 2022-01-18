\connect travel_agency_db travel_agency;

CREATE OR REPLACE PROCEDURE add_privilege_to_role(role varchar, privilege varchar) AS
$$
BEGIN
    INSERT INTO roles_privileges(role_id, privilege_id)
    VALUES ((SELECT id FROM roles WHERE name = role),
            (SELECT id FROM privileges WHERE name = privilege));
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE PROCEDURE transfer_role_privileges(from_role varchar, to_role varchar) AS
$$
DECLARE
    from_role_id INTEGER := (SELECT id
                             FROM roles
                             WHERE name = from_role);
    to_role_id   INTEGER := (SELECT id
                             FROM roles
                             WHERE name = to_role);
    from_roles_privileges_cursor CURSOR IS SELECT privilege_id
                                           FROM roles_privileges
                                           WHERE role_id = from_role_id;
BEGIN
    FOR privilege IN from_roles_privileges_cursor
        LOOP
            INSERT INTO roles_privileges(role_id, privilege_id) VALUES (to_role_id, privilege.privilege_id);
        END LOOP;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION reservations_to_loyalty_program(customer_id INTEGER) RETURNS INTEGER AS
$$
DECLARE
    next_hierarchy        INTEGER := (SELECT lp.hierarchy
                                      FROM customers c JOIN loyalty_programs lp ON c.loyalty_program_id = lp.id
                                      WHERE c.id = customer_id) + 1;

    next_prog_exists      BOOLEAN := (SELECT COUNT(id) > 0
                                      FROM loyalty_programs
                                      WHERE hierarchy = next_hierarchy);

    curr_num_reservations INTEGER := (SELECT COUNT(*)
                                      FROM customers c JOIN reservations r on c.id = r.customer_id);

BEGIN
    IF next_prog_exists = true THEN
        RETURN (SELECT threshold FROM loyalty_programs WHERE hierarchy = next_hierarchy) - curr_num_reservations;
    ELSE
        RETURN -1;
    END IF;
end;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE PROCEDURE add_loyalty_program(customer_id INTEGER) AS
$$
DECLARE
    next_hierarchy    INTEGER := (SELECT lp.hierarchy
                                  FROM customers c JOIN loyalty_programs lp ON c.loyalty_program_id = lp.id
                                  WHERE c.id = customer_id) + 1;

BEGIN
    UPDATE customers
    SET loyalty_program_id = (SELECT id
                              FROM loyalty_programs
                              WHERE hierarchy = next_hierarchy)
    WHERE id = customer_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION help_func_loyalty_prog_adder() RETURNS TRIGGER AS
$$
BEGIN
    IF reservations_to_loyalty_program(NEW.customer_id) = 0 THEN
        CALL add_loyalty_program(NEW.customer_id);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER loyalty_prog_adder AFTER INSERT ON reservations
    FOR EACH ROW EXECUTE FUNCTION help_func_loyalty_prog_adder();
