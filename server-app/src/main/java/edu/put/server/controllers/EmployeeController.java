package edu.put.server.controllers;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Employee;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PreAuthorize("hasRole('EMPLOYEES_READ')")
    @GetMapping
    public ResponseData<List<Employee>> getEmployees(@ModelAttribute PageFilter pageFilter, @RequestParam Map<String, String> paramMap) {
        return employeeService.getEmployees(pageFilter, paramMap);
    }

    @PreAuthorize("hasRole('EMPLOYEES_READ')")
    @GetMapping("/{id}")
    public Optional<Employee> getEmployee(@PathVariable int id) {
        return employeeService.getEmployee(id);
    }

    @PreAuthorize("hasRole('EMPLOYEES_UPDATE')")
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @PreAuthorize("hasRole('EMPLOYEES_DELETE')")
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable int id) {
        employeeService.deleteEmployee(id);
    }

}
