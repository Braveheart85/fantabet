package com.cranium.fantabet.model;

import java.util.ArrayList;
import java.util.List;

import com.cranium.fantabet.util.Deref;
import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Load;

@Entity
public class Tournament {

	@Id
	private Long id;

	@Load private List<Ref<Person>> admins = new ArrayList<Ref<Person>>();

	@Load private List<Ref<Person>> players = new ArrayList<Ref<Person>>();
	@Load private List<Ref<Day>> days = new ArrayList<Ref<Day>>();
	
	public List<Person> getAdmins() { return Deref.deref(admins); }
    public List<Person> getPlayers() { return Deref.deref(players); }
    public List<Day> getDays() { return Deref.deref(days); }
}