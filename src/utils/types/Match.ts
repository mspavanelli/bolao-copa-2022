import { MatchStatus } from "@/utils/enums/MatchStatus";

export type Match = {
  id?: string;
  date: Date;
  weight: number;
  first_team: string;
  first_team_score: number;
  second_team: string;
  second_team_score: number;
  status?: MatchStatus;
};
