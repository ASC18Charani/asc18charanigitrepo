package com.example.VLS_backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "COURSES")
public class Course {
    @Id
    private String id; // Custom ID (e.g., C0001, C0002)

    @Column(name = "COURSE_NAME", nullable = false)
    private String name;

    @Column(name = "DESCRIPTION", nullable = false)
    private String description;

    @Column(name = "TRAINER", nullable = false)
    private String trainer;

    @Column(name = "PRICE", nullable = false)
    private int price;

    public Course() {}

    public Course(String id, String name, String description, String trainer, int price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.trainer = trainer;
        this.price = price;
    }

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTrainer() {
        return trainer;
    }

    public void setTrainer(String trainer) {
        this.trainer = trainer;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
