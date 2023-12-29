import { Tab, TabLayout } from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
    title: "Molecules/TabLayout",
    component: TabLayout,
};

export const Simple: StoryObj = {
    render: () => (
        <TabLayout>
            <Tab selected={true}>Tab #1</Tab>
            <Tab>Tab #2</Tab>
        </TabLayout>
    ),
};
