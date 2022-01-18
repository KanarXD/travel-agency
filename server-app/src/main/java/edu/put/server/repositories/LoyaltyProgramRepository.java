package edu.put.server.repositories;

import edu.put.server.models.entities.LoyaltyProgram;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface LoyaltyProgramRepository extends JpaRepository<LoyaltyProgram, Integer>, JpaSpecificationExecutor<LoyaltyProgram> {
}
