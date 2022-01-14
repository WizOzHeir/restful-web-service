package com.homeproject.restfulwebservice.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.homeproject.restfulwebservice.model.UserModel;



public interface UserRepository extends JpaRepository<UserModel, Long> {
  List<UserModel> findByUserName(String name);
}
