package com.cranium.fantabet.model;

import java.util.List;

public class BetVO {
	private List<EventVO> bettableEvents;
	private String userId;
	private String championshipDayId;
	private String championshipDayName;
	
	public List<EventVO> getBettableEvents() {
		return bettableEvents;
	}
	public void setBettableEvents(List<EventVO> bettable) {
		this.bettableEvents = bettable;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getChampionshipDayId() {
		return championshipDayId;
	}
	public void setChampionshipDayId(String championshipDayId) {
		this.championshipDayId = championshipDayId;
	}
	public String getChampionshipDayName() {
		return championshipDayName;
	}
	public void setChampionshipDayName(String championshipDayName) {
		this.championshipDayName = championshipDayName;
	}

	

}
