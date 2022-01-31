package com.gepusoaf;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import javax.persistence.metamodel.Type;
import javax.persistence.EntityManager;

@SpringBootApplication
public class GepusoafApplication {

    public static void main(String[] args) {
        SpringApplication.run(GepusoafApplication.class, args);
    }

    @Bean
    public RepositoryRestConfigurer repositoryRestConfigurer(EntityManager entityManager) {
        return RepositoryRestConfigurer.withConfig(config -> {
            config.exposeIdsFor(entityManager.getMetamodel().getEntities()
                    .stream().map(Type::getJavaType).toArray(Class[]::new));
        });
    }

}
