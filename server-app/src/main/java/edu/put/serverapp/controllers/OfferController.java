package edu.put.serverapp.controllers;

import edu.put.serverapp.models.ResponseData;
import edu.put.serverapp.models.entities.Offer;
import edu.put.serverapp.models.filters.Filter;
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
    public ResponseData<List<Offer>> getOffers(@ModelAttribute Filter filter) {
        return offerService.getOffers(filter);
    }

    @PostMapping
    public Offer addOffer(@RequestBody Offer offer) {
        return offerService.addOffer(offer);
    }

    @DeleteMapping("/{id}")
    public void deleteOffer(@PathVariable int id) {
        offerService.deleteOffer(id);
    }

}
