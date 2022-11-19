export type MatchScorePointsProps = {
  points?: number;
};

export function MatchScorePoints({ points = 0 }: MatchScorePointsProps) {
  return (
    <div className="space-x-2 text-stone-200">
      <span>Pontos</span>
      <span className="inline-block w-8 min-w-fit rounded-lg bg-stone-600 py-1 px-3 text-center text-stone-100">
        {points}
      </span>
    </div>
  );
}
