package com.cranium.fantabet.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import com.cranium.fantabet.util.Deref;
import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Load;

@Entity
@NoArgsConstructor
public class Tournament {

	@Id @Getter			private Long id;
	@Getter @Setter 	private String name;
	@Getter				private Date creationDate;
	@Load				private Ref<Person> owner;
	@Load 				private List<Ref<Person>> players = new ArrayList<Ref<Person>>();
	@Load 				private List<Ref<FantaBetDay>> days = new ArrayList<Ref<FantaBetDay>>();

	public Tournament( String name, Person owner ) {
		this.owner = Ref.create(owner);
		this.name = name;
		this.creationDate = new Date();
	}
	
    public List<Person> getPlayers() { return Deref.deref(players); }
    public List<FantaBetDay> getDays() { return Deref.deref(days); }
    public Person getOwner() { return owner.get(); }
    
}