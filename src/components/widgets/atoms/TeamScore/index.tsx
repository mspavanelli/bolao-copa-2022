/* eslint-disable @next/next/no-img-element */
import React from "react";

export type TeamScoreProps = {
  teamName: string;
  teamCode: string;
  score: number;
  allowEdition: boolean;
  position: "left" | "right";
};

export function TeamScore({
  teamName,
  teamCode,
  allowEdition,
  score,
  position,
}: TeamScoreProps) {
  function handleUpdate(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
  }

  function getClassOrder() {
    switch (position) {
      case "left":
        return "flex-row";
      case "right":
        return "flex-row-reverse";
    }
  }
  return (
    <div className={`flex items-center gap-4 ${getClassOrder()}`}>
      <img
        src={`https://flagcdn.com/${teamCode.toLowerCase()}.svg`}
        alt={`${teamName}'s flags`}
        width={40}
        className="my-2"
      />
      <input
        className={`h-10 w-10 rounded bg-stone-800 p-2 text-center text-stone-300 outline-none ring-yellow-300 focus:ring-2 ${
          allowEdition ? "" : "opacity-70"
        }`}
        type="tel"
        disabled={!allowEdition}
        value={score}
        onChange={handleUpdate}
        onBlur={handleUpdate}
      />
    </div>
  );
}
