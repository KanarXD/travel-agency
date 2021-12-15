package edu.put.serverapp.repositories;

import edu.put.serverapp.models.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrivilegeRepository extends JpaRepository<Reservation, Integer> {
}
