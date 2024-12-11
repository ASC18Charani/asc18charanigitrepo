package com.example.VLS_backend.service;

import com.example.VLS_backend.entity.Learner;
import com.example.VLS_backend.repository.LearnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LearnerService {

    @Autowired
    private LearnerRepository learnerRepository;

    public List<Learner> getAllLearners() {
        return learnerRepository.findAll();
    }

    public Optional<Learner> getLearnerById(String id) {
        return learnerRepository.findById(id);
    }

    public Learner createLearner(Learner learner) {
        if (learner.getId() == null || learner.getId().isEmpty()) {
            learner.setId(generateLearnerId());
        }
        return learnerRepository.save(learner);
    }

    public Learner updateLearner(String id, Learner learner) {
        learner.setId(id);
        return learnerRepository.save(learner);
    }

    public void deleteLearner(String id) {
        learnerRepository.deleteById(id);
    }

    private String generateLearnerId() {
        // Logic to generate learner ID (e.g., L0001, L0002, etc.)
        List<Learner> allLearners = learnerRepository.findAll();
        String lastLearnerId = allLearners.isEmpty() ? "L0000" : allLearners.get(allLearners.size() - 1).getId();
        int idNumber = Integer.parseInt(lastLearnerId.substring(1)) + 1;
        return String.format("L%04d", idNumber);
    }
}
