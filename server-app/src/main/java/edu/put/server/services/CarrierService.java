package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Carrier;
import edu.put.server.models.filters.Filter;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.models.filters.QueryOperator;
import edu.put.server.repositories.CarrierRepository;
import edu.put.server.utility.SpecificationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class CarrierService {
    private static final List<Filter> filterList = List.of(
            Filter.builder().field("name").queryOperator(QueryOperator.STARTS_WITH).build()
    );

    @Autowired
    private CarrierRepository carrierRepository;

    public ResponseData<List<Carrier>> getCarriers(PageFilter pageFilter, Map<String, String> paramMap) {
        Specification<Carrier> specification = SpecificationResolver.createSpecification(filterList, paramMap);
        List<Carrier> carrierList = SpecificationResolver.getValidator().validate(pageFilter).isEmpty() ?
                carrierRepository.findAll(specification, PageRequest.of(pageFilter.getCurrentPage(), pageFilter.getItemsPerPage())).toList() :
                carrierRepository.findAll(specification);
        return ResponseData.<List<Carrier>>builder().data(carrierList).total(carrierRepository.count()).build();
    }

    public Optional<Carrier> getCarrier(Integer id) {
        return carrierRepository.findById(id);
    }

    public Carrier addCarrier(Carrier carrier) {
        return carrierRepository.save(carrier);
    }

    public void deleteCarrier(int id) {
        carrierRepository.deleteById(id);
    }

}
