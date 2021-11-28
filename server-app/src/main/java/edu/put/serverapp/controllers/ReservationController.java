package edu.put.serverapp.controllers;

import edu.put.serverapp.models.Reservation;
import edu.put.serverapp.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public List<Reservation> getReservations() {
        return reservationService.getReservations();
    }

    @PostMapping
    public Reservation addReservation(@RequestBody Reservation Reservation) {
        return reservationService.addReservation(Reservation);
    }

}
