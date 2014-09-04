package com.cranium.fantabet.context;

import com.cranium.fantabet.model.Bet;
import com.cranium.fantabet.model.Event;
import com.cranium.fantabet.model.Player;
import com.cranium.fantabet.model.Ranking;
import com.cranium.fantabet.model.SingleBet;
import com.cranium.fantabet.model.Tournament;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.googlecode.objectify.ObjectifyService;

public class OfyService {
    static {
        factory().register(Bet.class);
        factory().register(Event.class);
        factory().register(Player.class);
        factory().register(Ranking.class);
        factory().register(SingleBet.class);
        factory().register(Tournament.class);
    }

    public static Objectify ofy() {
        return ObjectifyService.ofy();
    }

    public static ObjectifyFactory factory() {
        return ObjectifyService.factory();
    }
}