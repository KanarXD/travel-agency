package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Offer;
import edu.put.server.models.filters.Filter;
import edu.put.server.repositories.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.validation.Validator;
import java.util.List;
import java.util.Optional;

@Service
public class OfferService {

    @Autowired
    private OfferRepository offerRepository;

    @Autowired
    private Validator validator;

    public ResponseData<List<Offer>> getOffers(Filter filter) {
        List<Offer> offerList = validator.validate(filter).isEmpty() ?
                offerRepository.findAll(PageRequest.of(filter.getCurrentPage(), filter.getItemsPerPage())).toList() :
                offerRepository.findAll();
        return ResponseData.<List<Offer>>builder().data(offerList).total(offerRepository.count()).build();
    }

    public Optional<Offer> getOffer(Integer id) {
        return offerRepository.findById(id);
    }

    public Offer addOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public void deleteOffer(int id) {
        offerRepository.deleteById(id);
    }
}
