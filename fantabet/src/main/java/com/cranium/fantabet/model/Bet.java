package com.cranium.fantabet.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;

import com.cranium.fantabet.util.Deref;
import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Load;

@Entity
public class Bet {

	@Id	@Getter		private Long id;
	@Load			private Ref<Person> better;
	@Load			private List<Ref<SingleBet>> singleBets = new ArrayList<Ref<SingleBet>>();
	
	public Bet(Person better) {
		this.better = Ref.create(better);
	}
	
	public Person getBetter() { return Deref.deref(better); }
	public List<SingleBet> getBets() { return Deref.deref(singleBets); }
}
