package com.gepusoaf.restservice.classe;

import com.sun.istack.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClasseService {

    private final ClasseRepository classeRepository;

    public ClasseService(ClasseRepository classeRepository) {
        this.classeRepository = classeRepository;
    }

    public List<Classe> findAll() {
        return this.classeRepository.findAll();
    }

    public Optional<Classe> findById(@NotNull int id) {
        return this.classeRepository.findById(id);
    }

    public int deleteClasse(int id) {
        classeRepository.deleteById(id);
        return id;
    }

    public Classe createClasse(Classe classe) {
        return classeRepository.save(classe);
    }

    public Classe updateClasse(int id, Classe cInput) {
        classeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Classe id %d introuvable.", id)));

        Classe c = Classe.builder()
                .numClasse(id)
                .nomClasse(cInput.getNomClasse())
                .build();

        return classeRepository.save(c);
    }
}
