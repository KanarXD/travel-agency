package edu.put.server.controllers;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Hotel;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @PreAuthorize("hasRole('OFFERS_READ')")
    @GetMapping
    public ResponseData<List<Hotel>> getHotels(@ModelAttribute PageFilter pageFilter, @RequestParam Map<String, String> paramMap) {
        return hotelService.getHotels(pageFilter, paramMap);
    }

    @PreAuthorize("hasRole('OFFERS_READ')")
    @GetMapping("/{id}")
    public Optional<Hotel> getHotel(@PathVariable Integer id) {
        return hotelService.getHotel(id);
    }

    @PreAuthorize("hasRole('OFFERS_UPDATE')")
    @PostMapping
    public Hotel addHotel(@RequestBody Hotel hotel) {
        return hotelService.addHotel(hotel);
    }

    @PreAuthorize("hasRole('OFFERS_DELETE')")
    @DeleteMapping("/{id}")
    public void deleteHotel(@PathVariable int id) {
        hotelService.deleteHotel(id);
    }

}
