import { addHours, isBefore } from "date-fns";
import { Match } from "@/utils/types/Match";
import { MatchStatus } from "@/utils/enums/MatchStatus";

export function getMatchStatus(match: Match) {
  const now = new Date();
  const matchStart = new Date(match.date);
  const matchEnd = addHours(matchStart, 2);

  const matchAlreadyFinished = isBefore(matchEnd, now);
  const matchNotStarted = isBefore(now, matchStart);

  if (matchAlreadyFinished) {
    return MatchStatus.CLOSED;
  }

  if (matchNotStarted) {
    return MatchStatus.OPEN;
  }

  return MatchStatus.CURRENT;
}
