package edu.put.server.services;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Role;
import edu.put.server.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public ResponseData<List<Role>> getRoles() {
        return ResponseData.<List<Role>>builder().data(roleRepository.findAll()).total(roleRepository.count()).build();
    }

    public Optional<Role> getRole(Integer id) {
        return roleRepository.findById(id);
    }

}
