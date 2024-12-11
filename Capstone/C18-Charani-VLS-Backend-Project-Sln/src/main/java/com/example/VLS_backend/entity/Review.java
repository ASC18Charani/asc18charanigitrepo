package com.example.VLS_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "REVIEWS")
public class Review {

    @Id
    @Column(name = "ID", nullable = false, unique = true)
    private String id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "COURSE", nullable = false)
    private String course;

    @Column(name = "REVIEW", nullable = false)
    private String review;

    @Column(name = "RATING", nullable = false)
    private int rating;

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
