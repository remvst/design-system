import { Gauge } from "@remvst/design-system";
import React from "react";
import { StoryObj } from "@storybook/react";

export default {
  title: "Utils/Gauge",
  component: Gauge,
};

interface Args {
  label: string;
  value: number;
}

export const Simple: StoryObj<Args> = {
  args: {
    label: "Label",
    value: 0.5,
  },
  render: (args) => <Gauge label={args.label} value={args.value} />,
};
