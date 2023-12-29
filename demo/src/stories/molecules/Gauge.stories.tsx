import { Gauge } from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
    title: "Molecules/Gauge",
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
