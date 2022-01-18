package edu.put.server.controllers;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Promotion;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.services.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/promotions")
public class PromotionController {

    @Autowired
    private PromotionService promotionService;

    @PreAuthorize("hasRole('PROMOTIONS_READ')")
    @GetMapping
    public ResponseData<List<Promotion>> getPromotions(@ModelAttribute PageFilter pageFilter, @RequestParam Map<String, String> paramMap) {
        return promotionService.getPromotions(pageFilter, paramMap);
    }

    @PreAuthorize("hasRole('PROMOTIONS_READ')")
    @GetMapping("/{id}")
    public Optional<Promotion> getPromotion(@PathVariable Integer id) {
        return promotionService.getPromotion(id);
    }

    @PreAuthorize("hasRole('PROMOTIONS_UPDATE')")
    @PostMapping
    public Promotion addPromotion(@RequestBody Promotion promotion) {
        return promotionService.addPromotion(promotion);
    }

    @PreAuthorize("hasRole('PROMOTIONS_DELETE')")
    @DeleteMapping("/{id}")
    public void deletePromotion(@PathVariable int id) {
        promotionService.deletePromotion(id);
    }

}
