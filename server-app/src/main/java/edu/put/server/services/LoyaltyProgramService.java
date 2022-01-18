package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.LoyaltyProgram;
import edu.put.server.models.filters.Filter;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.models.filters.QueryOperator;
import edu.put.server.repositories.LoyaltyProgramRepository;
import edu.put.server.utility.SpecificationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class LoyaltyProgramService {

    private static final List<Filter> filterList = List.of(
            Filter.builder().field("name").queryOperator(QueryOperator.STARTS_WITH).build()
    );

    @Autowired
    private LoyaltyProgramRepository loyaltyProgramRepository;

    public ResponseData<List<LoyaltyProgram>> getLoyaltyPrograms(PageFilter pageFilter, Map<String, String> paramMap) {
        Specification<LoyaltyProgram> specification = SpecificationResolver.createSpecification(filterList, paramMap);
        List<LoyaltyProgram> loyaltyProgramList = SpecificationResolver.getValidator().validate(pageFilter).isEmpty() ?
                loyaltyProgramRepository.findAll(specification, PageRequest.of(pageFilter.getCurrentPage(), pageFilter.getItemsPerPage())).toList() :
                loyaltyProgramRepository.findAll(specification);
        return ResponseData.<List<LoyaltyProgram>>builder().data(loyaltyProgramList).total(loyaltyProgramRepository.count()).build();
    }

    public Optional<LoyaltyProgram> getLoyaltyProgram(Integer id) {
        return loyaltyProgramRepository.findById(id);
    }

    public LoyaltyProgram addLoyaltyProgram(LoyaltyProgram loyaltyProgram) {
        return loyaltyProgramRepository.save(loyaltyProgram);
    }

    public void deleteLoyaltyProgram(int id) {
        loyaltyProgramRepository.deleteById(id);
    }


}
