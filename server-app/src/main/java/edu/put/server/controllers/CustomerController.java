package edu.put.server.controllers;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Customer;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PreAuthorize("hasRole('CUSTOMERS_READ')")
    @GetMapping
    public ResponseData<List<Customer>> getCustomers(@ModelAttribute PageFilter pageFilter, @RequestParam Map<String, String> paramMap) {
        return customerService.getCustomers(pageFilter, paramMap);
    }

    @PreAuthorize("hasRole('CUSTOMERS_READ')")
    @GetMapping("/{id}")
    public Optional<Customer> getCustomer(@PathVariable int id) {
        return customerService.getCustomer(id);
    }

    @PreAuthorize("hasRole('CUSTOMERS_DELETE')")
    @DeleteMapping("/{id}")
    public void deleteCustomer(@PathVariable int id) {
        customerService.deleteCustomer(id);
    }

    @PreAuthorize("hasRole('CUSTOMERS_UPDATE')")
    @PostMapping
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerService.addCustomer(customer);
    }

}
