package edu.put.server.services;

import edu.put.server.models.SessionUserDetails;
import edu.put.server.models.entities.Employee;
import edu.put.server.repositories.EmployeeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class SessionUserDetailsService implements UserDetailsService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.debug("Finding user: {} from database", username);
        Optional<Employee> optionalEmployee = employeeRepository.findByLogin(username);
        optionalEmployee.orElseThrow(() -> new UsernameNotFoundException("Not found: " + username));
        List<SimpleGrantedAuthority> grantedAuthorityList = employeeRepository
                .findEmployeePrivileges(optionalEmployee.get().getRole())
                .stream().map(SimpleGrantedAuthority::new).toList();
        return new SessionUserDetails(optionalEmployee.get(), grantedAuthorityList);
    }

    public Optional<SessionUserDetails> getSessionUserDetails() {
        Optional<Authentication> optionalAuthentication = Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication());
        if (optionalAuthentication.isEmpty()) {
            return Optional.empty();
        }
        if (optionalAuthentication.get().getPrincipal() instanceof SessionUserDetails) {
            return Optional.of((SessionUserDetails) optionalAuthentication.get().getPrincipal());
        }
        return Optional.empty();
    }

}
