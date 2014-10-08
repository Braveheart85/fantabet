package com.cranium.fantabet.contextobjectify;

import com.cranium.fantabet.model.Bet;
import com.cranium.fantabet.model.FantaBetDay;
import com.cranium.fantabet.model.SportEvent;
import com.cranium.fantabet.model.Person;
import com.cranium.fantabet.model.Ranking;
import com.cranium.fantabet.model.SingleBetVO;
import com.cranium.fantabet.model.Tournament;
import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyFactory;
import com.googlecode.objectify.ObjectifyService;

public class OfyService {
    static {
        factory().register(Bet.class);
        factory().register(FantaBetDay.class);
        factory().register(SportEvent.class);
        factory().register(Person.class);
        factory().register(Ranking.class);
        factory().register(SingleBetVO.class);
        factory().register(Tournament.class);
    }

    public static Objectify ofy() {
        return ObjectifyService.ofy();
    }

    public static ObjectifyFactory factory() {
        return ObjectifyService.factory();
    }
}