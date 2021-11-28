package edu.put.serverapp.repositories;

import edu.put.serverapp.models.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OfferRepository extends JpaRepository<Offer, Long> {
}
