package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Offer;
import edu.put.server.models.entities.Promotion;
import edu.put.server.models.filters.Filter;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.models.filters.QueryOperator;
import edu.put.server.repositories.OfferRepository;
import edu.put.server.utility.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class OfferService {
    private static final List<Filter> filterList = List.of(
            Filter.builder().field("name").queryOperator(QueryOperator.STARTS_WITH).build(),
            Filter.builder().field("basePrice").queryOperator(QueryOperator.LESS_THAN).build()
    );

    @Autowired
    private PromotionService promotionService;

    @Autowired
    private OfferRepository offerRepository;

    public ResponseData<List<Offer>> getOffers(PageFilter pageFilter, Map<String, String> paramMap) {
        return ServiceUtil.getResponseData(offerRepository, pageFilter, paramMap, filterList);
    }

    public Optional<Offer> getOffer(Integer id) {
        return offerRepository.findById(id);
    }

    public Offer addOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public void deleteOffer(int id) {
        offerRepository.deleteById(id);
    }

    public Optional<BigDecimal> getPriceAfterPromotion(int id) {
        Optional<Offer> optionalOffer = offerRepository.findById(id);
        if (optionalOffer.isEmpty()) {
            return Optional.empty();
        }
        if (Optional.ofNullable(optionalOffer.get().getPromotionId()).isEmpty()) {
            return Optional.of(optionalOffer.get().getBasePrice());
        }
        Optional<Promotion> optionalPromotion = promotionService.getPromotion(optionalOffer.get().getPromotionId());
        if (optionalPromotion.isEmpty() || optionalPromotion.get().getEndDate().after(new Date())) {
            return Optional.empty();
        }
        return Optional.of(optionalOffer.get().getBasePrice().multiply(BigDecimal.valueOf((1 - 0.01 * optionalPromotion.get().getDiscount()))));
    }
}
