import { MatchStatus } from "@/utils/enums/MatchStatus";
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
    status: MatchStatus.OPEN,
  },
  argTypes: {
    status: {
      control: {
        type: "select",
      },
    },
  },
} as Meta<MatchCardProps>;

export const Default: StoryObj<MatchCardProps> = {};

export const Open: StoryObj<MatchCardProps> = {
  args: {
    status: MatchStatus.OPEN,
  },
};

export const Closed: StoryObj<MatchCardProps> = {
  args: {
    status: MatchStatus.CLOSED,
  },
};

export const Current: StoryObj<MatchCardProps> = {
  args: {
    status: MatchStatus.CURRENT,
  },
};

export const Error: StoryObj<MatchCardProps> = {
  args: {
    status: MatchStatus.ERROR,
  },
};
