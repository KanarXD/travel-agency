package edu.put.server.controllers;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Reservation;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PreAuthorize("hasRole('RESERVATIONS_READ')")
    @GetMapping
    public ResponseData<List<Reservation>> getReservations(@ModelAttribute PageFilter pageFilter, @RequestParam Map<String, String> paramMap) {
        return reservationService.getReservations(pageFilter, paramMap);
    }

    @PreAuthorize("hasRole('RESERVATIONS_READ')")
    @GetMapping("/price")
    public Optional<BigDecimal> getReservationPrice(@RequestParam int offerId, @RequestParam int customerId) {
        return reservationService.getReservationPrice(offerId, customerId);
    }

    @PreAuthorize("hasRole('RESERVATIONS_UPDATE')")
    @PostMapping
    public Reservation addReservation(@RequestBody Reservation Reservation) {
        return reservationService.addReservation(Reservation);
    }

    @PreAuthorize("hasRole('RESERVATIONS_DELETE')")
    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable int id) {
        reservationService.deleteReservation(id);
    }

}
