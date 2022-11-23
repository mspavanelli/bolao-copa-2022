/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import dayJS from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import { X } from "phosphor-react";
import { getName } from "country-list";
import { MatchStatusPill } from "@/components/widgets/atoms/MatchStatusPill";
import { MatchScorePoints } from "@/components/widgets/atoms/MatchScorePoints";
import { TeamScore } from "@/components/widgets/molecules/TeamScore";

import { MatchStatus } from "@/utils/enums/MatchStatus";

export type MatchCardProps = {
  firstTeam: string;
  firstTeamGoals?: number;
  firstTeamGuessGoals?: number;
  secondTeam: string;
  secondTeamGoals?: number;
  secondTeamGuessGoals?: number;
  date: Date;
  status?: MatchStatus;
};

export function MatchCard({
  firstTeam,
  secondTeam,
  firstTeamGoals,
  secondTeamGoals,
  firstTeamGuessGoals,
  secondTeamGuessGoals,
  date,
  status,
}: MatchCardProps) {
  const when = dayJS(date).locale(ptBR).format("DD/MM - H[h]");

  const matchAlreadyFinished = status === MatchStatus.CLOSED;
  const allowEdition =
    status === MatchStatus.OPEN || status === MatchStatus.ERROR;

  const [scoreboard, setScoreboard] = useState([
    firstTeamGuessGoals,
    secondTeamGuessGoals,
  ]);

  function updateGuess() {
    console.warn({ scoreboard });
  }

  function getStatusStyles() {
    switch (status) {
      case MatchStatus.OPEN:
        return "border-b-2 border-yellow-400";
      case MatchStatus.CURRENT:
        return "border-b-2 border-green-500";
      case MatchStatus.CLOSED:
        return "opacity-80";
      case MatchStatus.ERROR:
        return "border-2 border-red-500";
    }
  }

  return (
    <div className={`rounded-lg bg-stone-700 p-4 ${getStatusStyles()}`}>
      <header className="mb-3 flex items-center justify-between">
        <p className="flex-1  text-gray-400">{when}</p>
        <div className="flex flex-1 justify-center">
          <MatchStatusPill status={status} />
        </div>
        <div className="flex flex-1 justify-end">
          <MatchScorePoints points={0} />
        </div>
      </header>

      {matchAlreadyFinished && (
        <div className="mx-auto mb-3 w-fit rounded-2xl bg-stone-50 px-3 py-1 text-xs text-stone-600">
          <span className="font-bold">
            {firstTeamGoals} &times; {secondTeamGoals}
          </span>
        </div>
      )}

      <div className="flex items-start justify-center gap-4">
        <div className="flex flex-1 justify-end">
          <TeamScore
            teamCode={firstTeam}
            allowEdition={allowEdition}
            direction="LEFT"
            score={firstTeamGuessGoals}
          />
        </div>

        <div className="mt-2">
          <X color="#8D8D99" size={24} />
        </div>

        <div className="flex-1">
          <TeamScore
            teamCode={secondTeam}
            allowEdition={allowEdition}
            direction="RIGHT"
            score={secondTeamGuessGoals}
          />
        </div>
      </div>
    </div>
  );
}
