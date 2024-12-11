package com.example.VLS_backend.repository;

import com.example.VLS_backend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {

    // Custom query method to find admin by email
    Optional<Admin> findByEmail(String email);
}
