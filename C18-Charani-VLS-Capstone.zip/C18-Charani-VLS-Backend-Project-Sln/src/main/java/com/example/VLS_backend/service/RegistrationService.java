package com.example.VLS_backend.service;

import com.example.VLS_backend.entity.Registration;
import com.example.VLS_backend.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    // Get all registrations
    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    // Get registration by ID
    public Optional<Registration> findRegistrationById(String id) {
        return registrationRepository.findById(id);
    }

    // Find registration by email
    public Optional<Registration> findByEmail(String email) {
        return registrationRepository.findByEmail(email);
    }

    // Find registration by phone
    public Optional<Registration> findByPhone(String phone) {
        return registrationRepository.findByPhone(phone);
    }

    // Create a new registration
    public Registration createRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

    // Update a registration
    public Registration updateRegistration(String id, Registration registration) {
        if (!registrationRepository.existsById(id)) {
            throw new IllegalArgumentException("Registration not found");
        }
        registration.setId(id);
        return registrationRepository.save(registration);
    }

    public String generateRegistrationId(String lastRegistrationId) {
        int idNumber = Integer.parseInt(lastRegistrationId.substring(1)); // Extract numeric part
        idNumber++; // Increment
        return String.format("R%04d", idNumber); // Format as V0001, V0002, etc.
    }

    // Delete a registration
//    public void deleteRegistration(String id) {
//        if (!registrationRepository.existsById(id)) {
//            throw new IllegalArgumentException("Registration not found");
//        }
//        registrationRepository.deleteById(id);
//    }

    public void deleteRegistration(String id) {
        registrationRepository.deleteById(id);
    }

}
