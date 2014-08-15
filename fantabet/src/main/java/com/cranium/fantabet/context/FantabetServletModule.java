package com.cranium.fantabet.context;

import com.cranium.fantabet.SignGuestbookServlet;
import com.google.inject.servlet.ServletModule;

public class FantabetServletModule extends ServletModule{

	@Override
	protected void configureServlets() {
		super.configureServlets();
	
		serve("/sign").with(SignGuestbookServlet.class);
	}
}
