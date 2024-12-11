package com.example.VLS_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "AUTHORS")
public class Author {

    @Id
    private String id;  // Custom ID (e.g., A0001, A0002)

    @Column(name = "NAME", nullable = false)
    private String name;  // Name of the author

    @Column(name = "COURSE", nullable = false)
    private String course;  // Course associated with the author

    @Column(name = "DESCRIPTION", nullable = false)
    private String description;  // Description about the author

    @Column(name = "RATING", nullable = false)
    private int rating;  // Rating of the author (1-5)

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
