package com.homeproject.restfulwebservice.model;

import javax.persistence.*;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;

import org.springframework.core.style.ToStringCreator;


@Entity
@Table(name = "users")
public class UserModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "email")
	@Email
	private String email;

	@Column(name = "address")
	private String address;
	
	@Column(name = "country")
	private String country;

	@Column(name = "telephone")
    @Digits(fraction = 0, integer = 10)
    private String telephone;
	

	public UserModel() {

	}
	
	public UserModel(String name, int age, String email, String address, 
			String country, String telephone) {
		this.name = name;
		this.age = age;
		this.email = email;
		this.address = address;
		this.country = country;
		this.telephone = telephone;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	
    @Override
    public String toString() {
        return new ToStringCreator(this)
            .append("id", this.getId())
            .append("name", this.name)
            .append("age", this.age)
            .append("email", this.email)
            .append("address", this.address)
            .append("country", this.country)
            .append("telephone", this.telephone)
            .toString();
    }
}