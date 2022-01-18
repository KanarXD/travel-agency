package edu.put.server.controllers;

import edu.put.server.models.ResponseData;
import edu.put.server.models.entities.LoyaltyProgram;
import edu.put.server.models.filters.PageFilter;
import edu.put.server.services.LoyaltyProgramService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/loyalty_programs")
public class LoyaltyProgramController {

    @Autowired
    private LoyaltyProgramService loyaltyProgramService;

    @PreAuthorize("hasRole('LOYALTY_PROG_READ')")
    @GetMapping
    public ResponseData<List<LoyaltyProgram>> getLoyaltyPrograms(@ModelAttribute PageFilter pageFilter, @RequestParam Map<String, String> paramMap) {
        return loyaltyProgramService.getLoyaltyPrograms(pageFilter, paramMap);
    }

    @PreAuthorize("hasRole('LOYALTY_PROG_READ')")
    @GetMapping("/{id}")
    public Optional<LoyaltyProgram> getLoyaltyProgram(@PathVariable Integer id) {
        return loyaltyProgramService.getLoyaltyProgram(id);
    }

    @PreAuthorize("hasRole('LOYALTY_PROG_UPDATE')")
    @PostMapping
    public LoyaltyProgram addLoyaltyProgram(@RequestBody LoyaltyProgram loyaltyProgram) {
        return loyaltyProgramService.addLoyaltyProgram(loyaltyProgram);
    }

    @PreAuthorize("hasRole('LOYALTY_PROG_DELETE')")
    @DeleteMapping("/{id}")
    public void deleteLoyaltyProgram(@PathVariable int id) {
        loyaltyProgramService.deleteLoyaltyProgram(id);
    }

}
