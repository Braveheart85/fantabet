package com.cranium.fantabet.context;

import com.google.inject.AbstractModule;
import com.google.inject.Singleton;
import com.googlecode.objectify.ObjectifyFilter;

public class FantabetBusinessLogicModule extends AbstractModule{

	@Override
	protected void configure() {

		bind(ObjectifyFilter.class).in(Singleton.class);
	}

}
