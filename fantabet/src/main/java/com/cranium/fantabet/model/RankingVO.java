package com.cranium.fantabet.model;

import java.util.List;

public class RankingVO {
	private String name;
	private List<RankingRowVO> rows;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<RankingRowVO> getRows() {
		return rows;
	}
	public void setRows(List<RankingRowVO> rows) {
		this.rows = rows;
	}
	
	@Override
	public String toString() {
		return "RankingVO [name=" + name + ", rows=" + rows + "]";
	}
	
	
	
}
