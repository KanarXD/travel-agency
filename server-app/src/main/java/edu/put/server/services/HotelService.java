package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Hotel;
import edu.put.server.models.filters.Filter;
import edu.put.server.repositories.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelService {

    @Autowired
    private HotelRepository hotelRepository;

    public Hotel addHotel(Hotel hotel) {
        return hotelRepository.save(hotel);
    }

    public ResponseData<List<Hotel>> getHotels(Filter filter) {
        List<Hotel> hotelList;
        if (filter.getItemsPerPage() == 0) {
            hotelList = hotelRepository.findAll();
        } else {
            hotelList = hotelRepository.findAll(PageRequest.of(filter.getCurrentPage(), filter.getItemsPerPage())).toList();
        }
        long total = hotelRepository.count();
        return ResponseData.<List<Hotel>>builder().data(hotelList).total(total).build();
    }

    public void deleteHotel(int id) {
        hotelRepository.deleteById(id);
    }

}
