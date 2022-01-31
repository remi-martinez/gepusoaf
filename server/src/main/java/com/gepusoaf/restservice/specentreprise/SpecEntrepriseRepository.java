package com.gepusoaf.restservice.specentreprise;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SpecEntrepriseRepository extends JpaRepository<SpecEntreprise, Integer> {
    List<SpecEntreprise> findAllByNumEntreprise(Integer NumEntreprise);
}
