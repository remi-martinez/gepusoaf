package com.gepusoaf.restservice.entreprise;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EntrepriseRepository extends JpaRepository<Entreprise, Integer> {
    List<Entreprise> findByRaisonSocialeEquals(String str);
}