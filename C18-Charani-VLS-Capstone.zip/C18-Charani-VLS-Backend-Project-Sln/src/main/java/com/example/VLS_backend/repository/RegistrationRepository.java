package com.example.VLS_backend.repository;

import com.example.VLS_backend.entity.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, String> {
    @Override
    Optional<Registration> findById(String id);

    // Find registration by email
    Optional<Registration> findByEmail(String email);

    // Find registration by phone number
    Optional<Registration> findByPhone(String phone);
}
