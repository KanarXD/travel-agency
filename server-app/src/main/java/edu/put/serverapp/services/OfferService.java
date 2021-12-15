package edu.put.serverapp.services;

import edu.put.serverapp.models.ResponseData;
import edu.put.serverapp.models.entities.Offer;
import edu.put.serverapp.models.filters.Filter;
import edu.put.serverapp.repositories.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfferService {

    @Autowired
    private OfferRepository offerRepository;

    public ResponseData<List<Offer>> getOffers(Filter filter) {
        List<Offer> offerList;
        if (filter.getItemsPerPage() == 0) {
            offerList = offerRepository.findAll();
        } else {
            offerList = offerRepository.findAll(PageRequest.of(filter.getCurrentPage(), filter.getItemsPerPage())).toList();
        }
        long total = offerRepository.count();
        return ResponseData.<List<Offer>>builder().data(offerList).total(total).build();
    }

    public Offer addOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public void deleteOffer(int id) {
        offerRepository.deleteById(id);
    }

}
