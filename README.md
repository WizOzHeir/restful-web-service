# User Management Webservice
> Spring Boot Rest Home Project using Spring Data JPA with H2 Database.

> Frontend part is built with React Hooks, Router, Bootstrap and is provided by Axios.

## API that are provided:
* POST	 /api/users	create new User
* GET	 /api/users	retrieve all Users
* GET	 /api/users/:id	get User by :id
* PUT	 /api/users/:id	update User by :id
* DELETE	 /api/users/:id	delete User by :id
* DELETE	 /api/users	delete all Users

## Technology
* Java
* Spring Boot (with Spring Web MVC, Spring Data JPA)
* H2 Database
* Maven

## Setup
> Backend

```
$ cd restful-web-service
$ mvn clean -X spring-boot:run
```
> Frontend

```
$ cd ../frontend
$ npm install
$ npm start
```

## Project Status
Project is: _in progress_ 

## Room for Improvement
- add sort filter, pagination in UsersList
- add validation in AddUser
- add 404 page
- add general exception handler
- build in Docker
- unit tests