\connect travel_agency_db travel_agency;

CREATE PROCEDURE add_privilege_to_role(role varchar, privilege varchar) AS
$$
BEGIN
    INSERT INTO roles_privileges(role_id, privilege_id)
    VALUES ((SELECT id FROM roles WHERE name = role),
            (SELECT id FROM privileges WHERE name = privilege));
END;
$$ LANGUAGE plpgsql;

CREATE PROCEDURE transfer_role_privileges(from_role varchar, to_role varchar) AS
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

CREATE FUNCTION reservations_to_loyalty_progran(customer_id serial, threshold integer DEFAULT 10) RETURNS integer AS
$$
DECLARE
    reservations_count INTEGER := (SELECT COUNT(*)
                                   FROM reservations r
                                   WHERE r.customer_id = customer_id);
BEGIN
    IF reservations_count < threshold THEN
        RETURN threshold - reservations_count;
    ELSE
        RETURN 0;
    END IF;
END;
$$ LANGUAGE plpgsql;
