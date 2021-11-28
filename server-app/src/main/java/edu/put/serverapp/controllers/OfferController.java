package edu.put.serverapp.controllers;

import edu.put.serverapp.models.Offer;
import edu.put.serverapp.services.OfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/offers")
public class OfferController {

    @Autowired
    private OfferService offerService;

    @GetMapping
    public List<Offer> getOffers() {
        return offerService.getOffers();
    }

    @PostMapping
    public Offer addOffer(@RequestBody Offer offer) {
        return offerService.addOffer(offer);
    }

}
