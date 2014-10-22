package com.cranium.fantabet.model;

public class RankingRowVO {
	private String player;
	private String playerId;
	private Double score;
	private Integer position;
	
	public RankingRowVO(String playerId, Integer position, String player, Double score) {
		this.player = player;
		this.playerId = playerId;
		this.score = score;
		this.position = position;
	}
	
	public String getPlayer() {
		return player;
	}
	public void setPlayer(String player) {
		this.player = player;
	}
	public Double getScore() {
		return score;
	}
	public void setScore(Double score) {
		this.score = score;
	}
	public Integer getPosition() {
		return position;
	}
	public void setPosition(Integer position) {
		this.position = position;
	}
	public String getPlayerId() {
		return playerId;
	}
	public void setPlayerId(String playerId) {
		this.playerId = playerId;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "RankingRowVO [player=" + player + ", playerId=" + playerId
				+ ", score=" + score + ", position=" + position + "]";
	}
	
	
}
