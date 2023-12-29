import { HighlightableRow } from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
    title: "Molecules/HighlightableRow",
    component: HighlightableRow,
};

export const Simple: StoryObj = {
    render: () => <HighlightableRow>Hello</HighlightableRow>,
};
