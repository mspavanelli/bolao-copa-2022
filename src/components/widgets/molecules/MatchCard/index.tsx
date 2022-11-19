/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import dayJS from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import { X } from "phosphor-react";
import { getName } from "country-list";
import { MatchStatusPill } from "@/components/widgets/atoms/MatchStatusPill";
import { MatchScorePoints } from "@/components/widgets/atoms/MatchScorePoints";

import { MatchStatus } from "@/utils/enums/MatchStatus";
import { Countries } from "@/utils/enums/Countries";

export type MatchCardProps = {
  firstTeam: Countries;
  firstTeamGoals?: number;
  secondTeam: Countries;
  secondTeamGoals?: number;
  date: Date;
  status: MatchStatus;
};

export function MatchCard({
  firstTeam,
  secondTeam,
  firstTeamGoals,
  secondTeamGoals,
  date,
  status,
}: MatchCardProps) {
  const firstTeamName = getName(firstTeam.toString());
  const secondTeamName = getName(secondTeam.toString());

  const when = dayJS(date)
    .locale(ptBR)
    .format("DD [de] MMMM [de] YYYY [às] hh:mm");

  const [scoreboard, setScoreboard] = useState([
    firstTeamGoals,
    secondTeamGoals,
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

  function allowEdition() {
    return status === MatchStatus.OPEN || status === MatchStatus.ERROR;
  }

  return (
    <div className={`rounded-lg bg-stone-700 p-4 ${getStatusStyles()}`}>
      <header className="mb-4 text-center">
        <h2 className="text-white">
          {firstTeamName} vs. {secondTeamName}
        </h2>
        <p className="text-gray-400">{when}</p>
      </header>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <input
            className={`h-10 w-10 rounded bg-stone-800 p-2 text-center text-stone-300 outline-none ring-yellow-300 focus:ring-2 ${
              allowEdition() ? "" : "opacity-70"
            }`}
            type="tel"
            disabled={!allowEdition()}
            value={scoreboard[0]}
            onChange={({ target }) => {
              const { value } = target;

              if (!value) {
                setScoreboard([0, scoreboard[1]]);
                return;
              }

              const first = parseInt(value);
              setScoreboard([first, scoreboard[1]]);
            }}
            onBlur={updateGuess}
          />
          <img
            src={`https://flagcdn.com/${firstTeam.toLowerCase()}.svg`}
            alt={`${firstTeamName}'s flags`}
            width={40}
            className="my-2"
          />
        </div>

        <X color="#8D8D99" size={24} />

        <div className="flex items-center gap-4">
          <img
            src={`https://flagcdn.com/${secondTeam.toLowerCase()}.svg`}
            alt={`${secondTeamName}'s flags`}
            width={40}
            className="my-2"
          />
          <input
            className={`h-10 w-10 rounded bg-stone-800 p-2 text-center text-stone-300 outline-none ring-yellow-300 focus:ring-2 ${
              allowEdition() ? "" : "opacity-70"
            }`}
            type="tel"
            disabled={!allowEdition()}
            value={scoreboard[1]}
            onChange={({ target }) => {
              const { value } = target;

              if (!value) {
                setScoreboard([scoreboard[0], 0]);
                return;
              }

              const second = parseInt(value);

              if (!Number.isInteger(second)) {
                target.value = "";
                return;
              }

              setScoreboard([scoreboard[0], second]);
            }}
            onBlur={updateGuess}
          />
        </div>
      </div>
      <hr className="my-4 border-stone-600" />
      <div className="mt-4 flex justify-between text-sm text-stone-300">
        <MatchStatusPill status={status} />
        <MatchScorePoints points={0} />
      </div>
    </div>
  );
}
