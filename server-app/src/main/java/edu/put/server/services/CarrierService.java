package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Carrier;
import edu.put.server.models.filters.Filter;
import edu.put.server.repositories.CarrierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarrierService {

    @Autowired
    private CarrierRepository carrierRepository;

    public ResponseData<List<Carrier>> getCarriers(Filter filter) {
        List<Carrier> carrierList;
        if (filter.getItemsPerPage() == 0) {
            carrierList = carrierRepository.findAll();
        } else {
            carrierList = carrierRepository.findAll(PageRequest.of(filter.getCurrentPage(), filter.getItemsPerPage())).toList();
        }
        long total = carrierRepository.count();
        return ResponseData.<List<Carrier>>builder().data(carrierList).total(total).build();
    }

    public Carrier addCarrier(Carrier carrier) {
        return carrierRepository.save(carrier);
    }

    public void deleteCarrier(int id) {
        carrierRepository.deleteById(id);
    }

}
