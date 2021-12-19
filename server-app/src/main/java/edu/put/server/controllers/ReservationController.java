package edu.put.server.controllers;

import edu.put.server.models.entities.Reservation;
import edu.put.server.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PreAuthorize("hasRole('RESERVATIONS_READ')")
    @GetMapping
    public List<Reservation> getReservations() {
        return reservationService.getReservations();
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
