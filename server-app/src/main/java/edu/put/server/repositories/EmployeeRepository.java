package edu.put.server.repositories;

import edu.put.server.models.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    Optional<Employee> findByLogin(String login);

    @SuppressWarnings("SqlResolve")
    @Query(value = "SELECT p.name " +
            "FROM roles r JOIN roles_privileges rp ON r.id=rp.role_id JOIN privileges p ON rp.privilege_id=p.id " +
            "WHERE r.id=:employeeId", nativeQuery = true)
    List<String> findEmployeePrivileges(@Param("employeeId") int employeeId);


}
