package com.gepusoaf.restservice.professeur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.Nullable;

public interface ProfesseurRepository extends JpaRepository<Professeur, Integer> {
    @Nullable Professeur findByLogin(String str);
}