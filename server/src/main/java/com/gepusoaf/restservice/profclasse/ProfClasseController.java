package com.gepusoaf.restservice.profclasse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/profClasse")
public class ProfClasseController {
    private final ProfClasseService profClasseService;

    @Autowired
    public ProfClasseController(ProfClasseService profClasseService) {
        this.profClasseService = profClasseService;
    }

    @GetMapping()
    public ResponseEntity<List<ProfClasse>> getAllProfPrincipalClasses() {
        return new ResponseEntity<>(this.profClasseService.getAllProfPrincipalClasse(), HttpStatus.OK);
    }

    @GetMapping("/{numProf}")
    public ResponseEntity<ProfClasse> getProfClasseFromNumProf(@PathVariable(value = "numProf") Integer numProf) {
        return new ResponseEntity<>(this.profClasseService.getProfClasseFromNumProf(numProf), HttpStatus.OK);
    }

    @GetMapping("classe/{numClasse}")
    public ResponseEntity<ProfClasse> getProfClasseFromNumClasseAndPPTrue(@PathVariable(value = "numClasse") Integer numClasse) {
        return new ResponseEntity<>(this.profClasseService.getProfClasseFromNumClasseAndPPVrai(numClasse), HttpStatus.OK);
    }
}
