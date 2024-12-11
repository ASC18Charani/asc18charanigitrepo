package com.example.VLS_backend.service;

import com.example.VLS_backend.entity.Review;
import com.example.VLS_backend.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    // Get all reviews
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    // Get a review by ID
    public Optional<Review> getReviewById(String id) {
        return reviewRepository.findById(id);
    }

    // Create a new review
    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    // Update an existing review
    public Review updateReview(String id, Review updatedReview) {
        Optional<Review> existingReview = reviewRepository.findById(id);
        if (existingReview.isPresent()) {
            updatedReview.setId(id); // Ensure ID is not changed
            return reviewRepository.save(updatedReview);
        }
        return null;
    }

//     Delete a review by ID
//    public void deleteReview(String id) {
//        Optional<Review> existingReview = reviewRepository.findById(id);
//        existingReview.ifPresent(review -> reviewRepository.delete(review));
//    }

//    public void deleteReview(String id) {
//        Optional<Review> review = reviewRepository.findById(id);
//        if (review.isPresent()) {
//            reviewRepository.delete(review.get());
//        } else {
//            throw new IllegalArgumentException("Review not found with id: " + id);
//        }
//    }

    public void deleteReview(String id) {
        reviewRepository.deleteById(id);
    }


    // Generate review ID
    public String generateReviewId(String lastReviewId) {
        int idNumber = Integer.parseInt(lastReviewId.substring(1)); // Extract numeric part
        idNumber++; // Increment
        return String.format("F%04d", idNumber); // Format as V0001, V0002, etc.
    }
}
