package com.example.VLS_backend.service;

import com.example.VLS_backend.entity.Admin;
import com.example.VLS_backend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    // Register a new admin
    public Admin registerAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    // Find admin by email
    public Optional<Admin> findByEmail(String email) {
        return adminRepository.findByEmail(email);
    }

    // Validate admin login
    public boolean validateAdmin(String email, String password) {
        Optional<Admin> admin = findByEmail(email);
        return admin.isPresent() && admin.get().getPassword().equals(password);
    }

    // Get all admins
    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public String generateAdminId(String lastAdminId) {
        int idNumber = Integer.parseInt(lastAdminId.substring(1)); // Extract numeric part
        idNumber++; // Increment
        return String.format("R%04d", idNumber); // Format as V0001, V0002, etc.
    }

}
