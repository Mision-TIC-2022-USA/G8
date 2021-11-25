/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.repositories;

import com.example.demo.Models.Persona;
import com.example.demo.repositories.CRUD.IPersonaCrudRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ASUS RYZEN
 */
@Repository
public class PersonaRepository {

    @Autowired
    private IPersonaCrudRepository personaCrudRepository;

    public List<Persona> getAll() {
        return personaCrudRepository.findAll();
    }

}
