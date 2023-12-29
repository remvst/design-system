import { HighlightableRow } from "@remvst/design-system";
import React from "react";
import { StoryObj } from "@storybook/react";

export default {
    title: "Molecules/HighlightableRow",
    component: HighlightableRow,
};

export const Simple: StoryObj = {
    render: () => <HighlightableRow>Hello</HighlightableRow>,
};
