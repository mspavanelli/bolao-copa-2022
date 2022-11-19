import { Meta } from "@storybook/react";

import { MatchScorePoints, MatchScorePointsProps } from "./index";

export default {
  title: "components/widgets/atoms/MatchScorePoints",
  component: MatchScorePoints,
  args: {
    points: 0,
  },
} as Meta<MatchScorePointsProps>;

export const Default = {};
