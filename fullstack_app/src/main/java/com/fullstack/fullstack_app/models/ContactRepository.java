package com.fullstack.fullstack_app.models;
// Repository files use to connect model to the database

import org.springframework.data.repository.CrudRepository;

// this interface connect the Contact model with the database with the Long primary Id
public interface ContactRepository extends CrudRepository<Contact, Long> {}
