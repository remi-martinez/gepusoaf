package com.gepusoaf.restservice.specialite;

import com.sun.istack.NotNull;
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
}
