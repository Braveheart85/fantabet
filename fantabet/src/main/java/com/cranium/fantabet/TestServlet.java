package com.cranium.fantabet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cranium.fantabet.model.BetVO;
import com.cranium.fantabet.model.EventVO;
import com.cranium.fantabet.model.RankingRowVO;
import com.cranium.fantabet.model.RankingVO;
import com.cranium.fantabet.model.RankingsVO;
import com.cranium.fantabet.model.SingleBetVO;
import com.google.gson.Gson;
import com.google.inject.Singleton;

@Singleton
public class TestServlet extends HttpServlet{
	private static final long serialVersionUID = 2333800576493644895L;

	
// ########################################################################################################### //	
// ##############################################  CLASSIFICA ################################################ //	
// ########################################################################################################### //
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
		
		//Create an object containing all others objects
		RankingRowVO row1 = new RankingRowVO("playerId001", 1, "ClaudioErPippa", 59.6);
		RankingRowVO row2 = new RankingRowVO("playerId002", 2, "Jonny", 56.1);
		RankingRowVO row3 = new RankingRowVO("playerId003", 3, "Pomata", 45.8);
		RankingRowVO row4 = new RankingRowVO("playerId004", 4, "Mandrake", 34.5);
		RankingRowVO row5 = new RankingRowVO("playerId005", 5, "Scrocchiazzeppi", 31.4);
		RankingRowVO row6 = new RankingRowVO("playerId006", 6, "Ninetto", 29.2);
		RankingRowVO row7 = new RankingRowVO("playerId007", 7, "SaintGeorge", 19.6);
			
		List<RankingRowVO> rows = new ArrayList<RankingRowVO>();
		rows.add(row1);
		rows.add(row2);
		rows.add(row3);
		rows.add(row4);
		rows.add(row5);
		rows.add(row6);
		rows.add(row7);
		
		RankingVO rankingVO = new RankingVO();
		rankingVO.setRows(rows);
		rankingVO.setName("L'accaniti");
		
		
		
		RankingsVO rankingsVO = new RankingsVO();
		rankingsVO.setCompleteRanking(rankingVO);
		rankingsVO.setLastFantaBetDayRanking(rankingVO);
		
		
		String jsonRankingsVO = new Gson().toJson(rankingsVO);
		
		
		//CREATE RESPONSE
		response.setContentType("json");
		// Get the printwriter object from response to write the required json object to the output stream      
		PrintWriter out = response.getWriter();
		out.print(jsonRankingsVO);
		out.flush();
		
		
		}
		catch (Exception e){
			e.printStackTrace();
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
// ########################################################################################################### //	
// ###########################################  INVIA GIOCATA ################################################ //	
// ########################################################################################################### //	
	
	
//	@Override
//	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		try {
//		//Get OBJECT from request
//		String dataString = request.getParameter("data");
//			
//		 Gson gson = new Gson();
//		 BetVO bet = gson.fromJson(dataString, BetVO.class);
//		    
//		 System.out.println(dataString);
//
//		
//		//Create an object containing all others objects
//		SingleBetVO singleBet01 = createSingleBet("singleBet0001", "1", 1.5);
//		SingleBetVO singleBet02 = createSingleBet("singleBet0002", "X", 3.5);
//		SingleBetVO singleBet03 = createSingleBet("singleBet0003", "2", 5.5);
//		
//		SingleBetVO singleBet11 = createSingleBet("singleBet0011", "1", 2.0);
//		SingleBetVO singleBet12 = createSingleBet("singleBet0012", "X", 3.0);
//		SingleBetVO singleBet13 = createSingleBet("singleBet0013", "2", 4.0);
//		
//		
//		
//		List<SingleBetVO> singleBets  = new ArrayList<SingleBetVO>();
//		singleBets.add(singleBet01);
//		singleBets.add(singleBet02);
//		singleBets.add(singleBet03);
//
//		List<SingleBetVO> singleBets2  = new ArrayList<SingleBetVO>();
//		singleBets2.add(singleBet11);
//		singleBets2.add(singleBet12);
//		singleBets2.add(singleBet13);
//		
//		EventVO event = new EventVO();
//		event.setHomeTeam("Juve");
//		event.setAwayTeam("Roma");
//		event.setId("event001");
//		event.setSingleBets(singleBets);
//
//		EventVO event2 = new EventVO();
//		event2.setHomeTeam("Milan");
//		event2.setAwayTeam("Napoli");
//		event2.setId("event002");
//		event2.setSingleBets(singleBets2);
//		
//		
//		List<EventVO> events = new  ArrayList<EventVO>();
//		events.add(event);
//		events.add(event2);
//		
//		BetVO betVO = new BetVO();
//		betVO.setChampionshipDayId("1");
//		betVO.setChampionshipDayName("Prima Giornata");
//		betVO.setUserId("mene001");
//		betVO.setBettableEvents(events);
//		
//		
//		String jsonBetVO = new Gson().toJson(betVO);
//		
//		
//		//CREATE RESPONSE
//		response.setContentType("json");
//		// Get the printwriter object from response to write the required json object to the output stream      
//		PrintWriter out = response.getWriter();
//		out.print(jsonBetVO);
//		out.flush();
//		
//		
//		}
//		catch (Exception e){
//			e.printStackTrace();
//		}
//	}
//
//	private SingleBetVO createSingleBet(String id, String result, Double odd) {
//		SingleBetVO singleBet = new SingleBetVO();
//		singleBet.setId(id);
//		singleBet.setResult(result);
//		singleBet.setOdd(odd);
//		return singleBet;
//	}
}
