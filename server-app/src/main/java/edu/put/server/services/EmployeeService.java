package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Employee;
import edu.put.server.models.filters.Filter;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.models.filters.QueryOperator;
import edu.put.server.repositories.EmployeeRepository;
import edu.put.server.utility.ServiceUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class EmployeeService {
    private static final List<Filter> filterList = List.of(
            Filter.builder().field("name").queryOperator(QueryOperator.STARTS_WITH).build(),
            Filter.builder().field("surname").queryOperator(QueryOperator.STARTS_WITH).build(),
            Filter.builder().field("login").queryOperator(QueryOperator.STARTS_WITH).build()
    );

    @Autowired
    private EmployeeRepository employeeRepository;

    public ResponseData<List<Employee>> getEmployees(PageFilter pageFilter, Map<String, String> paramMap) {
        return ServiceUtil.getResponseData(employeeRepository, pageFilter, paramMap, filterList);
    }

    public Optional<Employee> getEmployee(int id) {
        return employeeRepository.findById(id);
    }

    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(int id) {
        employeeRepository.deleteById(id);
    }

}
