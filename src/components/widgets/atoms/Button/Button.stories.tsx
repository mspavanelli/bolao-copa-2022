import { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./index";

export default {
  title: "components/widgets/atoms/Button",
  component: Button,
  args: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: "OK",
  },
};
