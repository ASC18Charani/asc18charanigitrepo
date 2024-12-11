package com.example.VLS_backend.service;

import com.example.VLS_backend.entity.Author;
import com.example.VLS_backend.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    // Get all authors
    public List<Author> getAllAuthors() {
        return authorRepository.findAll();
    }

    // Get author by ID
    public Optional<Author> getAuthorById(String id) {
        return authorRepository.findById(id);
    }

    // Create a new author
    public Author createAuthor(Author author) {
        return authorRepository.save(author);
    }

    // Update an existing author
    public Author updateAuthor(String id, Author author) {
        if (authorRepository.existsById(id)) {
            author.setId(id);
            return authorRepository.save(author);
        }
        return null; // Author not found
    }

    // Delete an author by ID
    public void deleteAuthor(String id) {
        authorRepository.deleteById(id);
    }

    // Generate a new ID for the author
    public String generateAuthorId(String lastAuthorId) {
        int idNumber = Integer.parseInt(lastAuthorId.substring(1)); // Extract numeric part
        idNumber++; // Increment
        return String.format("A%04d", idNumber); // Format as A0001, A0002, etc.
    }
}
