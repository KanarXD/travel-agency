package edu.put.server.controllers;

import edu.put.server.models.entities.Customer;
import edu.put.server.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PreAuthorize("hasRole('CUSTOMERS_READ')")
    @GetMapping
    public List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

    @PreAuthorize("hasRole('CUSTOMERS_UPDATE')")
    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    @PreAuthorize("hasRole('CUSTOMERS_DELETE')")
    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable int id) {
        customerService.deleteCustomer(id);
    }

}
