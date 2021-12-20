package edu.put.server.services;


import edu.put.server.models.SessionUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private SessionUserDetailsService sessionUserDetailsService;

    public List<String> login() {
        Optional<SessionUserDetails> optionalSessionUserDetails = sessionUserDetailsService.getSessionUserDetails();
        if (optionalSessionUserDetails.isPresent()) {
            return optionalSessionUserDetails.get().getAuthorities().stream().map(GrantedAuthority::getAuthority).toList();
        }
        return Collections.emptyList();
    }

}
