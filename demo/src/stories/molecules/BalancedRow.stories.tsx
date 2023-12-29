import {
    BalancedRow,
    Frame,
    MainButton,
    StackList,
} from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
    title: "Molecules/BalancedRow",
    component: BalancedRow,
};

export const Simple: StoryObj = {
    render: () => (
        <Frame>
            <BalancedRow>
                <StackList>
                    <MainButton>Button #1</MainButton>
                    <MainButton>Button #2</MainButton>
                    <MainButton>Button #3</MainButton>
                </StackList>
                <StackList>
                    <MainButton>Button #1</MainButton>
                    <MainButton>Button #2</MainButton>
                </StackList>
                <StackList>
                    <MainButton>Button #1</MainButton>
                    <MainButton>Button #2</MainButton>
                    <MainButton>Button #3</MainButton>
                </StackList>
            </BalancedRow>
        </Frame>
    ),
};
