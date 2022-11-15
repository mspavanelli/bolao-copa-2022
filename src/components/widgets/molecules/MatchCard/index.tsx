/* eslint-disable @next/next/no-img-element */

import { countries } from "@/data/countries";
import { getName } from "country-list";
import { X } from "phosphor-react";
import dayJS from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import { useEffect, useState } from "react";

export enum MatchStatus {
  CLOSED,
  OPEN,
  CURRENT,
  ERROR,
}

export type MatchCardProps = {
  firstTeam: string;
  firstTeamGoals?: number;
  secondTeam: string;
  secondTeamGoals?: number;
  date: Date;
  status: MatchStatus;
};

export function MatchCard({
  firstTeam,
  secondTeam,
  firstTeamGoals = 0,
  secondTeamGoals = 0,
  date,
  status,
}: MatchCardProps) {
  const firstTeamName = getName(firstTeam);
  const secondTeamName = getName(secondTeam);

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
        return "opacity-50";
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
        <div className="flex items-center gap-2">
          <input
            className="h-10 w-10 rounded bg-stone-800 p-2 text-center text-stone-300 outline-none ring-yellow-300 focus:ring-2"
            disabled={!allowEdition}
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

        <div className="flex items-center gap-2">
          <img
            src={`https://flagcdn.com/${secondTeam.toLowerCase()}.svg`}
            alt={`${secondTeamName}'s flags`}
            width={40}
            className="my-2"
          />
          <input
            className="h-10 w-10 rounded bg-stone-800 p-2 text-center text-stone-300 outline-none ring-yellow-300 focus:ring-2"
            disabled={!allowEdition}
            value={scoreboard[1]}
            onChange={({ target }) => {
              const { value } = target;

              if (!value) {
                setScoreboard([scoreboard[0], 0]);
                return;
              }

              const second = parseInt(value);
              setScoreboard([scoreboard[0], second]);
            }}
            onBlur={updateGuess}
          />
        </div>
      </div>
    </div>
  );
}
