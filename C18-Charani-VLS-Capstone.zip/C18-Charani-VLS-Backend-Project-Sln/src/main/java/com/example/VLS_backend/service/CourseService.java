package com.example.VLS_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.VLS_backend.entity.Course;
import com.example.VLS_backend.repository.CourseRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(String id) {
        return courseRepository.findById(id);
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(String id, Course course) {
        Optional<Course> existingCourse = courseRepository.findById(id);
        if (existingCourse.isPresent()) {
            course.setId(id); // Ensure the ID is not changed
            return courseRepository.save(course);
        }
        throw new RuntimeException("Course not found with id: " + id);
    }

    public void deleteCourse(String id) {
        courseRepository.deleteById(id);
    }

    public String generateCourseId(String lastCourseId) {
        int idNumber = Integer.parseInt(lastCourseId.substring(1)); // Extract numeric part
        idNumber++; // Increment
        return String.format("C%04d", idNumber); // Format as C0001, C0002, etc.
    }
}
