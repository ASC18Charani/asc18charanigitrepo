package com.example.VLS_backend.controller;

import com.example.VLS_backend.entity.Admin;
import com.example.VLS_backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/admin")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend to access this API
public class AdminController {

    @Autowired
    private AdminService adminService;

    // Register a new admin
    @PostMapping("/register")
    public ResponseEntity<?> registerAdmin(@RequestBody Admin admin) {
        Optional<Admin> existingAdmin = adminService.findByEmail(admin.getEmail());
        if (existingAdmin.isPresent()) {
            if (admin.getId() == null || admin.getId().isEmpty()) {
                List<Admin> allAdmins = adminService.getAllAdmins();
                String lastAdminId = allAdmins.isEmpty() ? "R0000" : allAdmins.get(allAdmins.size() - 1).getId();
                admin.setId(adminService.generateAdminId(lastAdminId));
            }
//            Admin savedAdmin = adminService.createAdmin(admin);
//            return ResponseEntity.badRequest().body("Email is already in use.");
        }
        Admin registeredAdmin = adminService.registerAdmin(admin);
        return ResponseEntity.ok(registeredAdmin);
    }

    // Login an admin
    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody Admin admin) {
        boolean isValidAdmin = adminService.validateAdmin(admin.getEmail(), admin.getPassword());
        if (isValidAdmin) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.badRequest().body("Invalid email or password.");
        }
    }

    // Get all admins
    @GetMapping("/all")
    public ResponseEntity<?> getAllAdmins() {
        return ResponseEntity.ok(adminService.getAllAdmins());
    }
}
