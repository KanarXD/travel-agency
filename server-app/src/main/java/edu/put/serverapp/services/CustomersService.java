package edu.put.serverapp.services;

import edu.put.serverapp.models.Customer;
import edu.put.serverapp.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomersService {

    @Autowired
    private CustomerRepository customersRepository;

    public Customer addCustomer(Customer customer) {
        return customersRepository.save(customer);
    }

    public List<Customer> getCustomers() {
        return customersRepository.findAll();
    }
}