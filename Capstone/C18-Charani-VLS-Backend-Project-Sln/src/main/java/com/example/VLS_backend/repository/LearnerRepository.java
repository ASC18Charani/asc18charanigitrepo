package com.example.VLS_backend.repository;

import com.example.VLS_backend.entity.Learner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearnerRepository extends JpaRepository<Learner, String> {
}
