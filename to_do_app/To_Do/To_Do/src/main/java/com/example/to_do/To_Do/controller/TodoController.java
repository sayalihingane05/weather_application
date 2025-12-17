package com.example.to_do.To_Do.controller;

import org.springframework.web.bind.annotation.*;

import com.example.to_do.To_Do.model.Todo;
import com.example.to_do.To_Do.repository.TodoRepository;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173")
public class TodoController {

    private final TodoRepository repo;

    public TodoController(TodoRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Todo> getTodos() {
        return repo.findAll();
    }

    @PostMapping
    public Todo create(@RequestBody Todo todo) {
        return repo.save(todo);
    }

    @PutMapping("/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo updated) {
        return repo.findById(id)
                .map(todo -> {
                    todo.setTitle(updated.getTitle());
                    todo.setCompleted(updated.isCompleted());
                    return repo.save(todo);
                })
                .orElseThrow();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}

