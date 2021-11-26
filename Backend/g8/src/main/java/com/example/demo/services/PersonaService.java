/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.demo.services;

import com.example.demo.Models.Persona;
import com.example.demo.repositories.PersonaRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS RYZEN
 */
@Service
public class PersonaService {
    
    @Autowired
    private PersonaRepository personaRepository;
    
    public List<Persona> getAll() {
        return personaRepository.getAll();
    }
    
    public Persona getById(Integer id) {
        return personaRepository.getById(id).orElse(null);
    }
    
    public Persona save(Persona persona) {
        
        if (persona.getId() == null) 
            return persona;
        
        Optional<Persona> existePersona = personaRepository.getById(persona.getId());
        
        if (existePersona.isPresent()) 
            return persona;
        
        return personaRepository.save(persona);
    }
    
    public Persona update(Persona persona) {
        
          if (persona.getId() == null)
            return persona;
        
        Optional<Persona> existePersona = personaRepository.getById(persona.getId());
        
        if (existePersona.isEmpty()) 
            return persona;
        

        //existePersona.get().setNombre(persona.getNombre());
        //existePersona.get().setCorreo(persona.getCorreo());
        //existePersona.get().setEdad(persona.getEdad());
        return personaRepository.save(persona);
    }
    
    public void delete(Integer id) {
        personaRepository.delete(id);
    }
    
}
