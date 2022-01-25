package edu.put.server.repositories;

import edu.put.server.models.entities.Customer;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends RepositoryBase<Customer> {
}
