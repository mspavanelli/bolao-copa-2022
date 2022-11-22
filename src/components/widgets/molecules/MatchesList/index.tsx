import { useQuery } from "@tanstack/react-query";
import { Match } from "@/utils/types/Match";
import { MatchCard } from "@/components/widgets/molecules/MatchCard";
import { getMatchStatus } from "@/utils/getMatchStatus";

export function MatchesList() {
  const { data, status, error, isLoading } = useQuery({
    queryKey: ["allMatches"],
    queryFn: fetchAllMatches,
  });

  function fetchAllMatches() {
    return fetch("/api/matches").then((response) => response.json());
  }

  if (!data || !data.matches) {
    return <div>...</div>;
  }

  const matches: Array<Match> = data.matches;

  return (
    <div className="space-y-8">
      {matches?.map((match) => (
        <MatchCard
          key={match.id}
          date={match.date}
          firstTeam={match.first_team}
          firstTeamGoals={match.first_team_score}
          secondTeam={match.second_team}
          secondTeamGoals={match.second_team_score}
          status={getMatchStatus(match)}
        />
      ))}
    </div>
  );
}
