package edu.put.server.services;

import edu.put.server.models.entities.Customer;
import edu.put.server.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customersRepository;

    public Customer addCustomer(Customer customer) {
        return customersRepository.save(customer);
    }

    public List<Customer> getCustomers() {
        return customersRepository.findAll();
    }

    public void deleteCustomer(int id) {
        customersRepository.deleteById(id);
    }
}
