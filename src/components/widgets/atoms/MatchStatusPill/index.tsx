import { MatchStatus } from "@/utils/enums/MatchStatus";

export type MatchStatusProps = {
  status: MatchStatus;
};

export function MatchStatusPill({ status }: MatchStatusProps) {
  if (status === MatchStatus.CLOSED) {
    return (
      <span className="rounded-full bg-stone-600 px-4 py-1 text-sm text-stone-200">
        Encerrado
      </span>
    );
  }

  if (status === MatchStatus.CURRENT) {
    return (
      <span className="rounded-full bg-lime-600 px-4 py-1 text-xs text-stone-200">
        AO VIVO
      </span>
    );
  }

  if (status === MatchStatus.OPEN) {
    return (
      <span className="rounded-full bg-amber-400 px-4 py-1 text-sm text-stone-800">
        Aberto
      </span>
    );
  }

  if (status === MatchStatus.ERROR) {
    return (
      <span className="rounded-full bg-red-600 px-4 py-1 text-sm text-stone-200">
        Erro
      </span>
    );
  }

  return <span>Status</span>;
}
