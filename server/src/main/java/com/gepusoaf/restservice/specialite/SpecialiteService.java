package com.gepusoaf.restservice.specialite;

import com.sun.istack.NotNull;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SpecialiteService {
    private final SpecialiteRepository specialiteRepository;

    public SpecialiteService(SpecialiteRepository specialiteRepository) {
        this.specialiteRepository = specialiteRepository;
    }

    public List<Specialite> findAll() {
        return specialiteRepository.findAll();
    }

    public Optional<Specialite> findById(@NotNull int id) {
        return specialiteRepository.findById(id);
    }

    public Specialite createSpecialite(@NotNull Specialite specialite) {
        return specialiteRepository.save(specialite);
    }

    public int deleteSpecialite(int id) {
        specialiteRepository.deleteById(id);
        return id;
    }

    public Specialite updateSpecialite(int id, Specialite sInput) {
        specialiteRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(String.format("Spécialité id %d introuvable.", id)));

        Specialite s = Specialite.builder()
                .numSpec(id)
                .libelle(sInput.getLibelle())
                .build();
        
        return specialiteRepository.save(s);
    }
}
