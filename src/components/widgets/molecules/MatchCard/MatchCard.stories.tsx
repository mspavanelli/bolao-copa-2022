import { Meta, StoryObj } from "@storybook/react";

import { MatchCard, MatchCardProps } from "./index";

export default {
  title: "components/widgets/molecules/MatchCard",
  component: MatchCard,
  args: {
    date: new Date(),
    firstTeam: "BR",
    firstTeamGoals: 2,
    secondTeam: "AR",
    secondTeamGoals: 0,
  },
} as Meta<MatchCardProps>;

export const Default: StoryObj<MatchCardProps> = {};
