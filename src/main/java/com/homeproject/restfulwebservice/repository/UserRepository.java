package com.homeproject.restfulwebservice.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.homeproject.restfulwebservice.model.UserModel;


@RepositoryRestResource(collectionResourceRel = "users", path = "api")
public interface UserRepository extends JpaRepository<UserModel, Long> {
  List<UserModel> findByNameStartingWithIgnoreCase(String name);
}
