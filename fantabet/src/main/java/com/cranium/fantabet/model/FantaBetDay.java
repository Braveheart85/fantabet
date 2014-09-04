package com.cranium.fantabet.model;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;

import com.googlecode.objectify.Key;
import com.googlecode.objectify.Ref;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Load;
import com.googlecode.objectify.annotation.Parent;

@Entity
@NoArgsConstructor
public class FantaBetDay {

	@Id @Getter		private Long id;
	@Parent			private Key<Tournament> parent;
	@Getter			private long number;
	@Load			private List<Ref<Bet>> bets = new ArrayList<Ref<Bet>>();
	@Load			private Ref<SportDay> sportDay;
	
	
}
