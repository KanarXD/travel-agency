package edu.put.serverapp.repositories;

import edu.put.serverapp.models.entities.Reservation;
import edu.put.serverapp.models.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
}
