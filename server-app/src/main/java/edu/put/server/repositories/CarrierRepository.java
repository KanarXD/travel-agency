package edu.put.server.repositories;

import edu.put.server.models.entities.Carrier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface CarrierRepository extends JpaRepository<Carrier, Integer>, JpaSpecificationExecutor<Carrier> {
}
