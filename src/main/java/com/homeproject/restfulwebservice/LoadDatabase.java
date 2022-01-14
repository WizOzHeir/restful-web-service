package com.homeproject.restfulwebservice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.homeproject.restfulwebservice.model.UserModel;
import com.homeproject.restfulwebservice.repository.UserRepository;


@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(UserRepository repository) {
    return args -> {
      log.info("Preloading " + repository.save(
    		  new UserModel("Toomas", 23, "toomas@gmail.com", "Musta tee 2", "Estonia", "888999")));
      log.info("Preloading " + repository.save(
    		  new UserModel("Kirsi", 10, "kiirsi@gmail.com", "Musta tee 2", "Estonia", "333444")));
    };
  }
}
