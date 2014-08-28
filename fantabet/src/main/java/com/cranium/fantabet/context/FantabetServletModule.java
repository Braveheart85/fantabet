package com.cranium.fantabet.context;

import com.cranium.fantabet.SignGuestbookServlet;
import com.google.inject.servlet.ServletModule;
import com.googlecode.objectify.ObjectifyFilter;

public class FantabetServletModule extends ServletModule{

	@Override
	protected void configureServlets() {
		super.configureServlets();
	
		serve("/sign").with(SignGuestbookServlet.class);
		
		filter("/*").through(ObjectifyFilter.class);
	}
}
