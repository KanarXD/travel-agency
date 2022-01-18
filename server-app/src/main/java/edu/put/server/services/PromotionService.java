package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Promotion;
import edu.put.server.models.filters.Filter;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.models.filters.QueryOperator;
import edu.put.server.repositories.PromotionRepository;
import edu.put.server.utility.SpecificationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class PromotionService {

    private static final List<Filter> filterList = List.of(
            Filter.builder().field("name").queryOperator(QueryOperator.STARTS_WITH).build()
    );

    @Autowired
    private PromotionRepository promotionRepository;

    public ResponseData<List<Promotion>> getPromotions(PageFilter pageFilter, Map<String, String> paramMap) {
        Specification<Promotion> specification = SpecificationResolver.createSpecification(filterList, paramMap);
        List<Promotion> promotionList = SpecificationResolver.getValidator().validate(pageFilter).isEmpty() ?
                promotionRepository.findAll(specification, PageRequest.of(pageFilter.getCurrentPage(), pageFilter.getItemsPerPage())).toList() :
                promotionRepository.findAll(specification);
        return ResponseData.<List<Promotion>>builder().data(promotionList).total(promotionRepository.count()).build();
    }

    public Optional<Promotion> getPromotion(Integer id) {
        return promotionRepository.findById(id);
    }

    public Promotion addPromotion(Promotion promotion) {
        return promotionRepository.save(promotion);
    }

    public void deletePromotion(int id) {
        promotionRepository.deleteById(id);
    }

}
