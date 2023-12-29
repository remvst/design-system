import { BalancedStack } from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
    title: "Molecules/BalancedStack",
    component: BalancedStack,
};

export const Simple: StoryObj = {
    render: () => (
        <BalancedStack>
            <div>Item #1</div>
            <div>Item #2</div>
            <div>Item #3</div>
        </BalancedStack>
    ),
};
