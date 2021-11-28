package edu.put.serverapp.controllers;

import edu.put.serverapp.models.Customer;
import edu.put.serverapp.services.CustomersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomersService customersService;

    @GetMapping
    public List<Customer> getCustomers() {
        return customersService.getCustomers();
    }

    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer) {
        return customersService.addCustomer(customer);
    }

}
