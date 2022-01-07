package com.gepusoaf.restservice.etudiant;

import com.gepusoaf.restservice.login.Credentials;
import com.sun.istack.NotNull;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
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

    public Etudiant createEtudiant(@NotNull Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    public int deleteEtudiant(int id) {
        etudiantRepository.deleteById(id);
        return id;
    }

    public Etudiant updateEtudiant(int id, Etudiant eInput) {
        etudiantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Etudiant id " + id + " introuvable."));

        Etudiant e = Etudiant.builder()
                .nomEtudiant(eInput.getNomEtudiant())
                .prenomEtudiant(eInput.getPrenomEtudiant())
                .anneeObtention(eInput.getAnneeObtention())
                .login(eInput.getLogin())
                .mdp(eInput.getMdp())
                .enActivite(eInput.getEnActivite())
                .numClasse(eInput.getNumClasse())
                .build();

        return etudiantRepository.save(e);
    }
}
