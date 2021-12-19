package edu.put.server.services;

import edu.put.server.models.entities.Reservation;
import edu.put.server.repositories.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getReservations() {
        return reservationRepository.findAll();
    }

    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public void deleteReservation(int id) {
        reservationRepository.deleteById(id);
    }
}
