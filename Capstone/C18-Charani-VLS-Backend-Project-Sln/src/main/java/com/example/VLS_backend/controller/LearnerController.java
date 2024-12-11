package com.example.VLS_backend.controller;

import com.example.VLS_backend.entity.Learner;
import com.example.VLS_backend.service.LearnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/learners")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend to access this API
public class LearnerController {

    @Autowired
    private LearnerService learnerService;

    @GetMapping
    public List<Learner> getAllLearners() {
        return learnerService.getAllLearners();
    }

    @GetMapping("/{id}")
    public Optional<Learner> getLearnerById(@PathVariable String id) {
        return learnerService.getLearnerById(id);
    }

    @PostMapping
    public ResponseEntity<Learner> createLearner(@RequestBody Learner learner) {
        try {
            Learner savedLearner = learnerService.createLearner(learner);
            return ResponseEntity.ok(savedLearner);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Learner> updateLearner(@PathVariable String id, @RequestBody Learner learner) {
        return ResponseEntity.ok(learnerService.updateLearner(id, learner));
    }

    @DeleteMapping("/{id}")
    public void deleteLearner(@PathVariable String id) {
        learnerService.deleteLearner(id);
    }
}
