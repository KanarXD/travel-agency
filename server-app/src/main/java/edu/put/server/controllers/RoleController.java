package edu.put.server.controllers;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.Offer;
import edu.put.server.models.entities.Role;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;

    @PreAuthorize("hasRole('ROLES_READ')")
    @GetMapping
    public ResponseData<List<Role>> getRoles(@ModelAttribute PageFilter pageFilter, @RequestParam Map<String, String> paramMap) {
        return roleService.getRoles();
    }

    @PreAuthorize("hasRole('ROLES_READ')")
    @GetMapping("/{id}")
    public Optional<Role> getRole(@PathVariable Integer id) {
        return roleService.getRole(id);
    }

}
