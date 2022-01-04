package edu.put.server.controllers;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Carrier;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.services.CarrierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carriers")
public class CarrierController {

    @Autowired
    private CarrierService carrierService;

    @PreAuthorize("hasRole('OFFERS_READ')")
    @GetMapping
    public ResponseData<List<Carrier>> getCarriers(@ModelAttribute PageFilter pageFilter) {
        return carrierService.getCarriers(pageFilter);
    }

    @PreAuthorize("hasRole('OFFERS_UPDATE')")
    @PostMapping
    public Carrier addCarrier(@RequestBody Carrier carrier) {
        return carrierService.addCarrier(carrier);
    }

    @PreAuthorize("hasRole('OFFERS_DELETE')")
    @DeleteMapping("/{id}")
    public void deleteCarrier(@PathVariable int id) {
        carrierService.deleteCarrier(id);
    }

}
