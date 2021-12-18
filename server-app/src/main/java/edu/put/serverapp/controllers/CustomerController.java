package edu.put.serverapp.controllers;

import edu.put.serverapp.models.entities.Customer;
import edu.put.serverapp.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PreAuthorize("hasRole('EMPLOYEES_READ')")
    @GetMapping
    public List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

    @PreAuthorize("hasRole('EMPLOYEES_UPDATE')")
    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

    @PreAuthorize("hasRole('EMPLOYEES_DELETE')")
    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable int id) {
        customerService.deleteCustomer(id);
    }
}
