package com.example.VLS_backend.controller;

import com.example.VLS_backend.entity.Course;
import com.example.VLS_backend.entity.Registration;
import com.example.VLS_backend.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/registrations")
@CrossOrigin(origins = "http://localhost:4200")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    // Get all registrations
    @GetMapping
    public List<Registration> getAllRegistrations() {
        return registrationService.getAllRegistrations();
    }

    @GetMapping("/{id}")
    public Optional<Registration> findRegistrationById(@PathVariable String id) {
        return registrationService.findRegistrationById(id);
    }

//    @GetMapping("/email/{emailId}")
//    public ResponseEntity<?> findRegistrationById(@PathVariable String emailId) {
//        Optional<Registration> registration = registrationService.findByEmail(emailId);
//        if (registration.isPresent()) {
//            return ResponseEntity.ok(registration.get());
//        }
//        return ResponseEntity.badRequest().body("Registration not found");
//    }
    // Get a single registration by ID
    @GetMapping("/email/{emailId}")
    public ResponseEntity<?> getRegistrationById(@PathVariable String emailId) {
        Optional<Registration> registration = registrationService.findByEmail(emailId);
        if (registration.isPresent()) {
            return ResponseEntity.ok(registration.get());
        }
//        return ResponseEntity.badRequest().body("Registration not found");
        Registration registration1 = new Registration();
        return ResponseEntity.ok(Optional.of(new Registration()));
    }

    // Create a new registration
    @PostMapping
    public ResponseEntity<?> createRegistration(@RequestBody Registration registration) {
        try {
            // Check if email is already in use
            Optional<Registration> existingEmail = registrationService.findByEmail(registration.getEmail());
            if (existingEmail.isPresent()) {
                return ResponseEntity.badRequest().body("Email is already in use.");
            }

            // Check if phone number is already in use
            Optional<Registration> existingPhone = registrationService.findByPhone(registration.getPhone());
            if (existingPhone.isPresent()) {
                return ResponseEntity.badRequest().body("Phone number is already in use.");
            }

            // Generate ID if not provided
            if (registration.getId() == null || registration.getId().isEmpty()) {
                List<Registration> allRegistrations = registrationService.getAllRegistrations();
                String lastRegistrationId = allRegistrations.isEmpty() ? "R0000" : allRegistrations.get(allRegistrations.size() - 1).getId();
                registration.setId(registrationService.generateRegistrationId(lastRegistrationId));
            }

            // Save the registration and return success
            Registration savedRegistration = registrationService.createRegistration(registration);
            return ResponseEntity.ok(savedRegistration);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error creating registration: " + e.getMessage());
        }
    }



    // Update an existing registration
    @PutMapping("/{id}")
    public ResponseEntity<?> updateRegistration(@PathVariable String id, @RequestBody Registration registration) {
        try {
            Registration updatedRegistration = registrationService.updateRegistration(id, registration);
            return ResponseEntity.ok(updatedRegistration);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Delete a registration by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteRegistration(@PathVariable String id) {
//        try {
//            registrationService.deleteRegistration(id);
//            return ResponseEntity.ok("Registration deleted successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Error deleting registration: " + e.getMessage());
//        }
//    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteRegistration(@PathVariable String id) {
//        try {
//            registrationService.deleteRegistration(id);
//            return ResponseEntity.ok("Registration deleted successfully");
//        } catch (IllegalArgumentException e) {
//            return ResponseEntity.status(404).body("Registration not found");
//        }
//    }

    @DeleteMapping("/{id}")
    public void deleteRegistration(@PathVariable String id) {
        registrationService.deleteRegistration(id);
    }
}
