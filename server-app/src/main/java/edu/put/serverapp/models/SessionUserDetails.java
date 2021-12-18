package edu.put.serverapp.models;

import edu.put.serverapp.models.entities.Employee;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

public class SessionUserDetails implements UserDetails {
    private final String username;
    private final String password;
    private final boolean active;
    private final List<SimpleGrantedAuthority> grantedAuthorityList;

    public SessionUserDetails(Employee employee, List<SimpleGrantedAuthority> grantedAuthorityList) {
        this.username = employee.getLogin();
        this.password = employee.getPassword();
        this.active = true;
        this.grantedAuthorityList = grantedAuthorityList;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthorityList;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }

}
