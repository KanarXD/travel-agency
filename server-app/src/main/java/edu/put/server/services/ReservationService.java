package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Reservation;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.repositories.ReservationRepository;
import edu.put.server.utility.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public ResponseData<List<Reservation>> getReservations(PageFilter pageFilter, Map<String, String> paramMap) {
        return ServiceUtil.getResponseData(reservationRepository, pageFilter, paramMap, Collections.emptyList());
    }

    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public void deleteReservation(int id) {
        reservationRepository.deleteById(id);
    }
}
