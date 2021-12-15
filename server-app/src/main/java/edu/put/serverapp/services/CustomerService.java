package edu.put.serverapp.services;

import edu.put.serverapp.models.entities.Customer;
import edu.put.serverapp.repositories.CustomerRepository;
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
