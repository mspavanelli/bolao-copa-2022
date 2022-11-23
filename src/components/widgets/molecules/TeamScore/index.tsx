/* eslint-disable @next/next/no-img-element */
import { ChangeEvent, useEffect, useState } from "react";
import { getTeamName } from "@/utils/getTeamName";

export type TeamScoreProps = {
  teamCode: string;
  score?: number;
  direction?: "LEFT" | "RIGHT";
  allowEdition?: boolean;
};

export function TeamScore({
  teamCode,
  score,
  direction = "LEFT",
  allowEdition = false,
}: TeamScoreProps) {
  const teamName = getTeamName(teamCode);

  const [scoreValue, setScoreValue] = useState(score);

  function handleUpdateScore({ target }: ChangeEvent<HTMLInputElement>) {
    const { value } = target;

    const isValidNumber = Number.isInteger(parseInt(value));

    if (!isValidNumber) {
      setScoreValue(0);
      return;
    }

    setScoreValue(parseInt(value));
  }

  return (
    <div
      className={`flex w-full max-w-fit items-start gap-4 ${
        direction === "RIGHT" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`flex flex-col ${
          direction === "LEFT" ? "items-end" : "items-start"
        }`}
      >
        <div className="flex h-10 items-center">
          <img
            src={`https://flagcdn.com/${teamCode.toLowerCase()}.svg`}
            alt={`${teamName}'s flags`}
            width={40}
            className="my-2"
          />
        </div>
        <span className="text-stone-100">{teamName}</span>
      </div>
      <input
        className={`h-10 w-10 rounded bg-stone-800 p-2 text-center text-stone-300 outline-none ring-yellow-300 focus:ring-2 ${
          allowEdition ? "" : "opacity-70"
        }`}
        type="tel"
        disabled={!allowEdition}
        value={scoreValue}
        onChange={handleUpdateScore}
        onBlur={handleUpdateScore}
      />
    </div>
  );
}
