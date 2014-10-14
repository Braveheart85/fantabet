package com.cranium.fantabet.model;

import java.util.List;

public class EventVO {
	private String homeTeam;
	private String awayTeam;
	private String id;
	private List<SingleBetVO> singleBets;
	private SingleBetVO bet;
	public String getHomeTeam() {
		return homeTeam;
	}
	public void setHomeTeam(String homeTeam) {
		this.homeTeam = homeTeam;
	}
	public String getAwayTeam() {
		return awayTeam;
	}
	public void setAwayTeam(String awayTeam) {
		this.awayTeam = awayTeam;
	}
	public String getId() {
		return id;
	}
	public void setId(String eventId) {
		this.id = eventId;
	}
	public List<SingleBetVO> getSingleBets() {
		return singleBets;
	}
	public void setSingleBets(List<SingleBetVO> singleBets) {
		this.singleBets = singleBets;
	}
	public SingleBetVO getBet() {
		return bet;
	}
	public void setBet(SingleBetVO bet) {
		this.bet = bet;
	}
	
	
}
