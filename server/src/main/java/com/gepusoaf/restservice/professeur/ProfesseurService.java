package com.gepusoaf.restservice.professeur;

import com.gepusoaf.restservice.login.Credentials;
import com.sun.istack.NotNull;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ProfesseurService {
    private final ProfesseurRepository professeurRepository;

    public ProfesseurService(ProfesseurRepository professeurRepository) {
        this.professeurRepository = professeurRepository;
    }

    public List<Professeur> findAll() {
        return professeurRepository.findAll();
    }

    public Optional<Professeur> findById(@NotNull int id) {
        return professeurRepository.findById(id);
    }

    public boolean connect(@NotNull Credentials credentials) {
        Professeur prof = professeurRepository.findByLogin(credentials.getLogin());
        if (prof == null) {
            return false;
        }
        return Objects.equals(prof.getMdp(), credentials.getMdp());
    }

    public Professeur createProfesseur(@NotNull Professeur professeur) {
        return professeurRepository.save(professeur);
    }

    public int deleteProfesseur(int id) {
        professeurRepository.deleteById(id);
        return id;
    }

    public Professeur updateProfesseur(int id, Professeur pInput) {
        professeurRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Professeur id " + id + " introuvable."));

        Professeur p = Professeur.builder()
                .nomProf(pInput.getNomProf())
                .prenomProf(pInput.getPrenomProf())
                .login(pInput.getLogin())
                .mdp(pInput.getMdp())
                .email(pInput.getEmail())
                .build();

        return professeurRepository.save(p);
    }


}
