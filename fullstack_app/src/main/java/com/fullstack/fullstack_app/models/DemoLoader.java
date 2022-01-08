package com.fullstack.fullstack_app.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DemoLoader implements CommandLineRunner{
    
    private final ContactRepository repository;
    
    @Autowired
    public DemoLoader(ContactRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception { //from CommandLineRunner
        // this will run when we run the program
        // works like useEffect
        this.repository.save(new Contact("Logan", "Nguyen", "logan@gmail.com"));
    }

}
