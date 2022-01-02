package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Hotel;
import edu.put.server.models.filters.Filter;
import edu.put.server.repositories.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.validation.Validator;
import java.util.List;
import java.util.Optional;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private Validator validator;

    public ResponseData<List<Hotel>> getHotels(Filter filter) {
        List<Hotel> hotelList = validator.validate(filter).isEmpty() ?
                hotelRepository.findAll(PageRequest.of(filter.getCurrentPage(), filter.getItemsPerPage())).toList() :
                hotelRepository.findAll();
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
