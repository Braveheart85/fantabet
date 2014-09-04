package com.cranium.fantabet.model;

import java.util.Date;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class Person {
	
	@Id	@Getter 	private Long id;
	@Getter			private String email;
	@Getter 		private Date created;
	@Getter			private Date lastLogin;
	
	public Person(String email) {
		this.email = email;
		this.created = new Date();
	}

	public void loggedIn() {
		this.lastLogin = new Date();
	}
	
	public static Key<Person> key(long id) {
		return Key.create(Person.class, id);
	}
}