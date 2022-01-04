package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Hotel;
import edu.put.server.models.filters.Filter;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.models.filters.QueryOperator;
import edu.put.server.repositories.HotelRepository;
import edu.put.server.utility.SpecificationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class HotelService {
    private static final List<Filter> filterList = List.of(
            Filter.builder().field("name").queryOperator(QueryOperator.STARTS_WITH).build(),
            Filter.builder().field("location").queryOperator(QueryOperator.STARTS_WITH).build()
    );

    @Autowired
    private HotelRepository hotelRepository;

    public ResponseData<List<Hotel>> getHotels(PageFilter pageFilter, Map<String, String> paramMap) {
        Specification<Hotel> specification = SpecificationResolver.createSpecification(filterList, paramMap);
        List<Hotel> hotelList = SpecificationResolver.getValidator().validate(pageFilter).isEmpty() ?
                hotelRepository.findAll(specification, PageRequest.of(pageFilter.getCurrentPage(), pageFilter.getItemsPerPage())).toList() :
                hotelRepository.findAll(specification);
        return ResponseData.<List<Hotel>>builder().data(hotelList).total(hotelRepository.count()).build();
    }

    public Optional<Hotel> getHotel(Integer id) {
        return hotelRepository.findById(id);
    }

    public Hotel addHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    public void deleteHotel(int id) {
        hotelRepository.deleteById(id);
    }
}
