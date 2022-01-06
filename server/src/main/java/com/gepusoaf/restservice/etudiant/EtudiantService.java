package com.gepusoaf.restservice.etudiant;

import com.gepusoaf.restservice.login.Credentials;
import com.sun.istack.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class EtudiantService {
    private final EtudiantRepository etudiantRepository;

    public EtudiantService(EtudiantRepository etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }

    public List<Etudiant> findAll() {
        return etudiantRepository.findAll();
    }

    public Optional<Etudiant> findById(@NotNull int id) {
        return etudiantRepository.findById(id);
    }

    public boolean connect(@NotNull Credentials credentials) {
        Etudiant etu = etudiantRepository.findByLogin(credentials.getLogin());
        if (etu == null) {
            return false;
        }
        return Objects.equals(etu.getMdp(), credentials.getMdp());
    }
}
