import { useState, useEffect } from "react";

import { MatchStatus } from "@/utils/enums/MatchStatus";
import { MatchCard } from "@/components/widgets/molecules/MatchCard";
import { Countries } from "@/utils/enums/Countries";
import { Match } from "@/utils/types/Match";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function MatchesList() {
  const [matches, setMatches] = useState<Array<Match>>([]);

  const matchesCollection = collection(db, "matches");

  async function fetchMatches() {
    try {
      const response = await getDocs(matchesCollection);
      const { docs } = response;

      const matchesDoc = docs.map((doc) => {
        const { id } = doc;
        const {
          first_team,
          first_team_score,
          second_team,
          second_team_score,
          weight,
          date: rawDate,
        } = doc.data();

        const date = new Date(rawDate.seconds * 1000);

        const status = MatchStatus.OPEN;

        return {
          id,
          date,
          first_team,
          first_team_score,
          second_team,
          second_team_score,
          weight,
          status,
        };
      });

      const allMatchesOrderByDate = matchesDoc.sort(
        (firstMatch, secondMatch) =>
          new Date(firstMatch.date) - new Date(secondMatch.date)
      );

      setMatches(allMatchesOrderByDate);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="space-y-8">
      {matches.map((match) => (
        <MatchCard
          key={match.id}
          date={match.date}
          firstTeam={Countries[match.first_team]}
          firstTeamGoals={match.first_team_score}
          secondTeam={Countries[match.second_team]}
          secondTeamGoals={match.second_team_score}
          status={match.status}
        />
      ))}
    </div>
  );
}
