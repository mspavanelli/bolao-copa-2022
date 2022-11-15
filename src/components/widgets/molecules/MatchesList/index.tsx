import { MatchCard, MatchStatus } from "../MatchCard";

export function MatchesList() {
  return (
    <div className="space-y-8">
      <MatchCard
        date={new Date("2022-11-20T08:00:00.719Z")}
        firstTeam="QA"
        secondTeam="EC"
        firstTeamGoals={0}
        secondTeamGoals={1}
        status={MatchStatus.CLOSED}
      />
      <MatchCard
        date={new Date("2022-11-21T05:00:00.719Z")}
        firstTeam="SN"
        secondTeam="NL"
        firstTeamGoals={0}
        secondTeamGoals={2}
        status={MatchStatus.CURRENT}
      />
      <MatchCard
        date={new Date("2022-11-23T06:00:00.719Z")}
        firstTeam="AR"
        secondTeam="SA"
        firstTeamGoals={3}
        secondTeamGoals={0}
        status={MatchStatus.OPEN}
      />
    </div>
  );
}