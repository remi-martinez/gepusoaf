package com.gepusoaf.restservice.etudiant;

import com.gepusoaf.restservice.classe.Classe;
import com.gepusoaf.restservice.classe.ClasseRepository;
import com.gepusoaf.restservice.login.Credentials;
import com.sun.istack.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class EtudiantService {
    private final EtudiantRepository etudiantRepository;
    private final ClasseRepository classeRepository;

    public EtudiantService(EtudiantRepository etudiantRepository, ClasseRepository classeRepository) {
        this.etudiantRepository = etudiantRepository;
        this.classeRepository = classeRepository;
    }

    public List<Etudiant> findAll() {
        return etudiantRepository.findAll();
    }

    public Optional<Etudiant> findById(@NotNull int id) {
        return etudiantRepository.findById(id);
    }

    public Optional<Etudiant> findByLogin(@NotNull String str) {
        return Optional.ofNullable(etudiantRepository.findByLogin(str));
    }

    public boolean connect(@NotNull Credentials credentials) {
        Etudiant etu = etudiantRepository.findByLogin(credentials.getLogin());
        if (etu == null) {
            return false;
        }
        return Objects.equals(etu.getMdp(), credentials.getMdp());
    }

    public Etudiant createEtudiant(@NotNull EtudiantInput eInput) {
        Classe cl = classeRepository.findById(eInput.getNumClasse())
                .orElseThrow(() -> new RuntimeException("Classe id " + eInput.getNumClasse() + " introuvable."));

        Etudiant e = Etudiant.builder()
                .nomEtudiant(eInput.getNomEtudiant())
                .prenomEtudiant(eInput.getPrenomEtudiant())
                .anneeObtention(eInput.getAnneeObtention())
                .login(eInput.getLogin())
                .mdp(eInput.getMdp())
                .enActivite(eInput.getEnActivite())
                .numClasse(cl)
                .stages(Collections.emptyList())
                .build();


        return etudiantRepository.save(e);
    }

    public int deleteEtudiant(int id) {
        etudiantRepository.deleteById(id);
        return id;
    }

    public Etudiant updateEtudiant(int id, EtudiantInput eInput) {
        Etudiant old = etudiantRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Etudiant id %d introuvable.", id)));
        Classe cl = classeRepository.findById(eInput.getNumClasse())
                .orElseThrow(() -> new RuntimeException("Classe id " + eInput.getNumClasse() + " introuvable."));

        Etudiant e = Etudiant.builder()
                .numEtudiant(id)
                .nomEtudiant(eInput.getNomEtudiant())
                .prenomEtudiant(eInput.getPrenomEtudiant())
                .anneeObtention(eInput.getAnneeObtention())
                .login(eInput.getLogin())
                .mdp(eInput.getMdp())
                .enActivite(eInput.getEnActivite())
                .numClasse(cl)
                .stages(old.getStages())
                .build();

        return etudiantRepository.save(e);
    }
}
