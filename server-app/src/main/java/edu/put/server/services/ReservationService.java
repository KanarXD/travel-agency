package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.LoyaltyProgram;
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
        return reservationRepository.save(reservation);
    }

    public void deleteReservation(int id) {
        reservationRepository.deleteById(id);
    }

    public Optional<BigDecimal> getReservationPrice(int offerId, int customerId) {
        Optional<BigDecimal> optionalOfferPrice = offerService.getPriceAfterPromotion(offerId);
        if (optionalOfferPrice.isEmpty()) {
            return Optional.empty();
        }
        Optional<LoyaltyProgram> optionalLoyaltyProgram = customerService.getCustomerDiscount(customerId);
        if (optionalLoyaltyProgram.isEmpty()) {
            return optionalOfferPrice;
        }
        return Optional.of(optionalOfferPrice.get().multiply(
                BigDecimal.valueOf(1 - 0.01 * optionalLoyaltyProgram.get().getDiscount())));
    }
}
