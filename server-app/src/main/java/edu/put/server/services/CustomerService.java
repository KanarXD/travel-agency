package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Customer;
import edu.put.server.models.entities.LoyaltyProgram;
import edu.put.server.models.filters.Filter;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.models.filters.QueryOperator;
import edu.put.server.repositories.CustomerRepository;
import edu.put.server.utility.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class CustomerService {
    private static final List<Filter> filterList = List.of(
            Filter.builder().field("name").queryOperator(QueryOperator.STARTS_WITH).build(),
            Filter.builder().field("surname").queryOperator(QueryOperator.STARTS_WITH).build()
    );

    @Autowired
    private LoyaltyProgramService loyaltyProgramService;

    @Autowired
    private CustomerRepository customersRepository;

    public ResponseData<List<Customer>> getCustomers(PageFilter pageFilter, Map<String, String> paramMap) {
        return ServiceUtil.getResponseData(customersRepository, pageFilter, paramMap, filterList);
    }

    public Customer addCustomer(Customer customer) {
        return customersRepository.save(customer);
    }

    public void deleteCustomer(int id) {
        customersRepository.deleteById(id);
    }

    public Optional<Customer> getCustomer(int id) {
        return customersRepository.findById(id);
    }

    public Optional<LoyaltyProgram> getCustomerDiscount(int id) {
        Optional<Customer> optionalCustomer = customersRepository.findById(id);
        if (optionalCustomer.isEmpty() || Optional.ofNullable(optionalCustomer.get().getLoyaltyProgramId()).isEmpty()) {
            return Optional.empty();
        }
        return loyaltyProgramService.getLoyaltyProgram(optionalCustomer.get().getLoyaltyProgramId());
    }
}
