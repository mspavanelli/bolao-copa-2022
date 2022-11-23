import { Meta, StoryObj } from "@storybook/react";

import { TeamScore, TeamScoreProps } from "./index";

export default {
  title: "components/widgets/molecules/TeamScore",
  component: TeamScore,
  args: {
    teamCode: "BR",
    score: 0,
    allowEdition: true,
  },
} as Meta<TeamScoreProps>;

export const Default: StoryObj<TeamScoreProps> = {};

export const Left: StoryObj<TeamScoreProps> = {
  args: {
    direction: "LEFT",
  },
};

export const Right: StoryObj<TeamScoreProps> = {
  args: {
    direction: "RIGHT",
  },
};
