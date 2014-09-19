package com.cranium.fantabet.model;

import java.util.List;
import java.util.Map;

public class BigObject {
	private List<A> list;
	private A a;
	private Map<String, A> map;
	
	
	public BigObject() {
		super();
	}
	public List<A> getList() {
		return list;
	}
	public void setList(List<A> list) {
		this.list = list;
	}
	public A getA() {
		return a;
	}
	public void setA(A a) {
		this.a = a;
	}
	public Map<String, A> getMap() {
		return map;
	}
	public void setMap(Map<String, A> map) {
		this.map = map;
	}

}
