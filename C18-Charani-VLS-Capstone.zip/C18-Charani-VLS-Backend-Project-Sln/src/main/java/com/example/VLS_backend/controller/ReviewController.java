package com.example.VLS_backend.controller;

import com.example.VLS_backend.entity.Review;
import com.example.VLS_backend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/reviews")
@CrossOrigin(origins = "http://localhost:4200") // Allow frontend to access this API
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    // Get all reviews
    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    // Get a review by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getReviewById(@PathVariable String id) {
        Optional<Review> review = reviewService.getReviewById(id);
        if (review.isPresent()) {
            return ResponseEntity.ok(review.get());
        }
        return ResponseEntity.badRequest().body("Review not found");
    }

    // Create a new review
    @PostMapping
    public ResponseEntity<?> createReview(@RequestBody Review review) {
        try {
            // Generate ID for the review if not provided
            if (review.getId() == null || review.getId().isEmpty()) {
                List<Review> allReviews = reviewService.getAllReviews();
                String lastReviewId = allReviews.isEmpty() ? "F0000" : allReviews.get(allReviews.size() - 1).getId();
                review.setId(reviewService.generateReviewId(lastReviewId));
            }
            Review savedReview = reviewService.createReview(review);
            return ResponseEntity.ok(savedReview);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error creating review: " + e.getMessage());
        }
    }

    // Update an existing review
    @PutMapping("/{id}")
    public ResponseEntity<?> updateReview(@PathVariable String id, @RequestBody Review review) {
        try {
            Review updatedReview = reviewService.updateReview(id, review);
            if (updatedReview != null) {
                return ResponseEntity.ok(updatedReview);
            } else {
                return ResponseEntity.badRequest().body("Review not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error updating review: " + e.getMessage());
        }
    }

    // Delete a review by ID
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteReview(@PathVariable String id) {
//        try {
//            reviewService.deleteReview(id);
//            return ResponseEntity.ok("Review deleted successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Error deleting review: " + e.getMessage());
//        }
//    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteReview(@PathVariable String id) {
//        try {
//            Optional<Review> existingReview = reviewService.getReviewById(id);
//            if (existingReview.isPresent()) {
//                reviewService.deleteReview(id);
//                return ResponseEntity.ok("Review deleted successfully");
//            } else {
//                return ResponseEntity.badRequest().body("Review not found");
//            }
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Error deleting review: " + e.getMessage());
//        }
//    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteReview(@PathVariable String id) {
//        try {
//            Optional<Review> existingReview = reviewService.getReviewById(id);
//            if (existingReview.isPresent()) {
//                reviewService.deleteReview(id);
//                return ResponseEntity.ok("Review deleted successfully");
//            } else {
//                return ResponseEntity.badRequest().body("Review not found with id: " + id);
//            }
//        } catch (Exception e) {
//            return ResponseEntity.status(500).body("Error deleting review: " + e.getMessage());
//        }
//    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable String id) {
        reviewService.deleteReview(id);
    }


}
