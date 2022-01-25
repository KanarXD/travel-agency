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

CREATE OR REPLACE FUNCTION reservations_to_loyalty_program(c_id INTEGER) RETURNS INTEGER AS
$$
DECLARE
    curr_program          INTEGER := (SELECT COALESCE(loyalty_program_id, -1)
                                      FROM customers
                                      WHERE id = c_id);

    next_program          INTEGER := curr_program + 1;

    next_program_exists   BOOLEAN := (SELECT COUNT(id) > 0
                                      FROM loyalty_programs
                                      WHERE id = next_program);

    curr_num_reservations INTEGER := (SELECT COUNT(*)
                                      FROM reservations
                                      WHERE customer_id = c_id);

BEGIN
    IF curr_program = -1 THEN
        next_program := (SELECT id FROM loyalty_programs ORDER BY id LIMIT 1);
        RETURN (SELECT threshold FROM loyalty_programs WHERE id = next_program) - curr_num_reservations;
    END IF;

    IF next_program_exists = true THEN
        RETURN (SELECT threshold FROM loyalty_programs WHERE id = next_program) - curr_num_reservations;
    ELSE
        RETURN -1;
    END IF;
end;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE PROCEDURE add_loyalty_program(c_id INTEGER) AS
$$
DECLARE
    curr_program INTEGER := (SELECT COALESCE(loyalty_program_id, -1)
                             FROM customers
                             WHERE id = c_id);

    next_program INTEGER := curr_program + 1;

BEGIN
    IF curr_program = -1 THEN
        next_program := (SELECT id FROM loyalty_programs ORDER BY id LIMIT 1);
    END IF;

    UPDATE customers
    SET loyalty_program_id = next_program
    WHERE id = c_id;
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
