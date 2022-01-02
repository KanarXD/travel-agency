package edu.put.server.controllers;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Offer;
import edu.put.server.models.filters.Filter;
import edu.put.server.services.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/offers")
public class OfferController {

    @Autowired
    private OfferService offerService;

    @PreAuthorize("hasRole('OFFERS_READ')")
    @GetMapping
    public ResponseData<List<Offer>> getOffers(@ModelAttribute Filter filter) {
        return offerService.getOffers(filter);
    }

    @PreAuthorize("hasRole('OFFERS_READ')")
    @GetMapping("/{id}")
    public Optional<Offer> getOffer(@PathVariable Integer id) {
        return offerService.getOffer(id);
    }

    @PreAuthorize("hasRole('OFFERS_UPDATE')")
    @PostMapping
    public Offer addOffer(@RequestBody Offer offer) {
        return offerService.addOffer(offer);
    }

    @PreAuthorize("hasRole('OFFERS_DELETE')")
    @DeleteMapping("/{id}")
    public void deleteOffer(@PathVariable int id) {
        offerService.deleteOffer(id);
    }

}
