import { MatchStatus } from "@/utils/enums/MatchStatus";
import { Meta, StoryObj } from "@storybook/react";

import { MatchStatusPill, MatchStatusProps } from "./index";

export default {
  title: "components/widgets/atoms/MatchStatusPill",
  component: MatchStatusPill,
  args: {},
  argTypes: {
    status: {
      defaultValue: MatchStatus.OPEN,
      description: "Status of match",
      control: {
        type: "select",
      },
    },
  },
} as Meta<MatchStatusProps>;

export const Default: StoryObj<MatchStatusProps> = {};

export const Closed: StoryObj<MatchStatusProps> = {
  args: {
    status: MatchStatus.CLOSED,
  },
};

export const Current: StoryObj<MatchStatusProps> = {
  args: {
    status: MatchStatus.CURRENT,
  },
};

export const Open: StoryObj<MatchStatusProps> = {
  args: {
    status: MatchStatus.OPEN,
  },
};

export const Error: StoryObj<MatchStatusProps> = {
  args: {
    status: MatchStatus.ERROR,
  },
};
