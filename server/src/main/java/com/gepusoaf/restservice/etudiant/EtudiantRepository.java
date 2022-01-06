package com.gepusoaf.restservice.etudiant;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.lang.Nullable;

public interface EtudiantRepository extends JpaRepository<Etudiant, Integer> {
    @Nullable Etudiant findByLogin(String str);
}