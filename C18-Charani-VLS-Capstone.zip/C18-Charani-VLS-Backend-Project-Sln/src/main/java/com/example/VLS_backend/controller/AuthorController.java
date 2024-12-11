package com.example.VLS_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.VLS_backend.entity.Author;
import com.example.VLS_backend.service.AuthorService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/authors")
@CrossOrigin(origins = "http://localhost:4200") // Allow Angular frontend to access this API
public class AuthorController {

    @Autowired
    private AuthorService authorService;

    // Get all authors
    @GetMapping
    public List<Author> getAllAuthors() {
        return authorService.getAllAuthors();
    }

    // Get author by ID
    @GetMapping("/{id}")
    public Optional<Author> getAuthorById(@PathVariable String id) {
        return authorService.getAuthorById(id);
    }

    // Create a new author
    @PostMapping
    public Author createAuthor(@RequestBody Author author) {
        // Generate ID for the author if not provided
        if (author.getId() == null || author.getId().isEmpty()) {
            List<Author> allAuthors = authorService.getAllAuthors();
            String lastAuthorId = allAuthors.isEmpty() ? "A0000" : allAuthors.get(allAuthors.size() - 1).getId();
            author.setId(authorService.generateAuthorId(lastAuthorId)); // Generate ID
        }
        return authorService.createAuthor(author);
    }

    // Update an existing author
    @PutMapping("/{id}")
    public Author updateAuthor(@PathVariable String id, @RequestBody Author author) {
        return authorService.updateAuthor(id, author);
    }

    // Delete an author by ID
    @DeleteMapping("/{id}")
    public void deleteAuthor(@PathVariable String id) {
        authorService.deleteAuthor(id);
    }
}
