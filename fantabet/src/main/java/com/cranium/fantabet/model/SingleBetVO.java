package com.cranium.fantabet.model;


public class SingleBetVO {
	private String id;
	private String result;
	private Double odd;

	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public Double getOdd() {
		return odd;
	}
	public void setOdd(Double odd) {
		this.odd = odd;
	}
	@Override
	public String toString() {
		return "SingleBet [id=" + id + ", result=" + result + ", odd=" + odd
				+ "]";
	}
	
	
	
}
