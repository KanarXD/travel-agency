package edu.put.serverapp.services;

import edu.put.serverapp.models.Offer;
import edu.put.serverapp.repositories.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    @Autowired
    private OfferRepository offerRepository;

    public List<Offer> getOffers() {
        return offerRepository.findAll();
    }

    public Offer addOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public void deleteOffer(int id) {
        offerRepository.deleteById(id);
    }
}
