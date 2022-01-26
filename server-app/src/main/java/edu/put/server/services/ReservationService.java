package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.LoyaltyProgram;
import edu.put.server.models.entities.Offer;
import edu.put.server.models.entities.Reservation;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.repositories.ReservationRepository;
import edu.put.server.utility.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private OfferService offerService;

    @Autowired
    private CustomerService customerService;

    public ResponseData<List<Reservation>> getReservations(PageFilter pageFilter, Map<String, String> paramMap) {
        return ServiceUtil.getResponseData(reservationRepository, pageFilter, paramMap, Collections.emptyList());
    }

    public Reservation addReservation(Reservation reservation) {
        Optional<BigDecimal> optionalPrice = getReservationPrice(reservation.getOfferId(), reservation.getCustomerId());
        if (optionalPrice.isEmpty()) {
            return null;
        }
        reservation.setPrice(optionalPrice.get());
        return reservationRepository.save(reservation);
    }

    public void deleteReservation(int id) {
        reservationRepository.deleteById(id);
    }

    public Optional<BigDecimal> getReservationPrice(int offerId, int customerId) {
        Optional<Offer> optionalOffer = offerService.getOffer(offerId);
        if (optionalOffer.isEmpty()) {
            return Optional.empty();
        }
        Optional<LoyaltyProgram> optionalLoyaltyProgram = customerService.getCustomerDiscount(customerId);
        if (optionalLoyaltyProgram.isEmpty()) {
            return Optional.of(optionalOffer.get().getPrice());
        }
        return Optional.of(optionalOffer.get().getPrice().multiply(
                BigDecimal.valueOf(1 - 0.01 * optionalLoyaltyProgram.get().getDiscount())));
    }
}
