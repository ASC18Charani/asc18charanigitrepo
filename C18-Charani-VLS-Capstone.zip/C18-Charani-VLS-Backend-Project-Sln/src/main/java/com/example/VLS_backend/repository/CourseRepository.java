package com.example.VLS_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.VLS_backend.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {
}
