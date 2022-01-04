package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Offer;
import edu.put.server.models.filters.Filter;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.models.filters.QueryOperator;
import edu.put.server.repositories.OfferRepository;
import edu.put.server.utility.SpecificationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class OfferService {
    private static final List<Filter> filterList = List.of(
            Filter.builder().field("name").queryOperator(QueryOperator.STARTS_WITH).build(),
            Filter.builder().field("basePrice").queryOperator(QueryOperator.LESS_THAN).build()
    );

    @Autowired
    private OfferRepository offerRepository;

    public ResponseData<List<Offer>> getOffers(PageFilter pageFilter, Map<String, String> paramMap) {
        Specification<Offer> specification = SpecificationResolver.createSpecification(filterList, paramMap);
        List<Offer> offerList = SpecificationResolver.getValidator().validate(pageFilter).isEmpty() ?
                offerRepository.findAll(specification, PageRequest.of(pageFilter.getCurrentPage(), pageFilter.getItemsPerPage())).toList() :
                offerRepository.findAll(specification);
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
