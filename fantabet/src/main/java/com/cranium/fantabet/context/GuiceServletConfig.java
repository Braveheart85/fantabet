package com.cranium.fantabet.context;

import java.util.Map;

import javax.servlet.ServletContextEvent;

import lombok.extern.slf4j.Slf4j;

import com.cranium.fantabet.SignGuestbookServlet;
import com.cranium.fantabet.TestServlet;
import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Singleton;
import com.google.inject.servlet.GuiceServletContextListener;
import com.google.inject.servlet.ServletModule;
import com.googlecode.objectify.ObjectifyFilter;

@Slf4j
public class GuiceServletConfig extends GuiceServletContextListener {
	
	static class FantabetServletModule extends ServletModule {
		/*
		 * (non-Javadoc)
		 * 
		 * @see com.google.inject.servlet.ServletModule#configureServlets()
		 */
		@Override
		protected void configureServlets() {
			super.configureServlets();
//			
//			Map<String, String> appstatsFilterParams = Maps.newHashMap();
//			appstatsFilterParams.put("logMessage",
//					"Appstats: /admin/appstats/details?time={ID}");
//			appstatsFilterParams.put("calculateRpcCosts", "true");
//			
//			filter("/*").through(AppstatsFilter.class, appstatsFilterParams);
			filter("/*").through(ObjectifyFilter.class);
			
			serve("/sign").with(SignGuestbookServlet.class);
			serve("/test").with(TestServlet.class);
//			serve("/appstats/*").with(AppstatsServlet.class);
		}
	}

	/** Public so it can be used by unit tests */
	public static class FantabetBusinessModule extends AbstractModule {
		/*
		 * (non-Javadoc)
		 * 
		 * @see com.google.inject.AbstractModule#configure()
		 */
		@Override
		protected void configure() {

//			// Lets us use @Transact
//			bindInterceptor(Matchers.any(),
//					Matchers.annotatedWith(Transact.class),
//					new TransactInterceptor());

			// External things that don't have Guice annotations
//			bind(AppstatsFilter.class).in(Singleton.class);
//			bind(AppstatsServlet.class).in(Singleton.class);
			bind(ObjectifyFilter.class).in(Singleton.class);
		}
	}

	/**
	 * Logs the time required to initialize Guice
	 */
	@Override
	public void contextInitialized(ServletContextEvent servletContextEvent) {
		long time = System.currentTimeMillis();

		super.contextInitialized(servletContextEvent);

		long millis = System.currentTimeMillis() - time;
		log.info("Guice initialization took " + millis + " millis");
	}

	@Override
	protected Injector getInjector() {
		return Guice.createInjector(new FantabetServletModule(),
				new FantabetBusinessModule());
	}
}