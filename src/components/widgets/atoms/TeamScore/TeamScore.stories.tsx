import { Meta } from "@storybook/react";

import { TeamScore, TeamScoreProps } from "./index";

export default {
  title: "components/widgets/atoms/TeamScore",
  component: TeamScore,
  args: {
    allowEdition: true,
    score: 0,
    teamCode: "BR",
    teamName: "Brasil",
    position: "left",
  },
} as Meta<TeamScoreProps>;

export const Default = {};

export const Left = {
  args: {
    position: "left",
  },
};

export const Right = {
  args: {
    position: "right",
  },
};
