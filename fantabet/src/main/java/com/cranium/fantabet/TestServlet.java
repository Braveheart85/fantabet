package com.cranium.fantabet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cranium.fantabet.model.A;
import com.cranium.fantabet.model.BigObject;
import com.google.gson.Gson;
import com.google.inject.Singleton;

@Singleton
public class TestServlet extends HttpServlet{
	private static final long serialVersionUID = 2333800576493644895L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
		//Get OBJECT from request
		Object object = request.getParameter("stringa");
		System.out.println("object: " + object);

		//Get ARRAY from request
		Object lista = request.getParameter("lista");
		System.out.println("lista: " + lista);
		
		
		
		//Create OBJECT for response
		A a = new A("8","9");
		
		//Create ARRAY for response
		List<A> list = new ArrayList<A>();
		list.add(new A("1","2"));
		list.add(new A("5","6"));
		list.add(new A("8","9"));
		
		
		//Create MAP for response
		Map<String,A> map = new HashMap<String,A>();
		map.put("a", new A("1","2"));
		map.put("b", new A("5","6"));
		map.put("c", new A("8","9"));
		
		//Create an object containing all others objects
		BigObject bo = new BigObject();
		bo.setA(a);
		bo.setList(list);
		bo.setMap(map);
		String jsonBo = new Gson().toJson(bo);
		
		
		//CREATE RESPONSE
		response.setContentType("json");
		// Get the printwriter object from response to write the required json object to the output stream      
		PrintWriter out = response.getWriter();
		out.print(jsonBo);
		out.flush();
		
		
		}
		catch (Exception e){
			e.printStackTrace();
		}
	}
}
