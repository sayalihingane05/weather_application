package com.example.to_do.To_Do.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.to_do.To_Do.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {}
