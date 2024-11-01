import {
    AlignRight,
    FlowList,
    Gauge,
    MainButton,
    MainTitle,
    ScreenStackLayout,
    ScreenStackLayoutBottom,
    ScreenStackLayoutContent,
    ScreenStackLayoutTop,
    SmallLabel,
    Spacing,
    StackList,
    VerticalCenter,
} from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
    title: "Organisms/ScreenStackLayout",
    component: ScreenStackLayout,
    parameters: {
        layout: "fullscreen",
    },
};

export const MainMenu: StoryObj = {
    render: () => (
        <ScreenStackLayout>
            <ScreenStackLayoutTop>
                <MainTitle>Main Title</MainTitle>
            </ScreenStackLayoutTop>
            <ScreenStackLayoutContent>
                <StackList>
                    <MainButton>Play</MainButton>
                    <MainButton>Settings</MainButton>
                    <MainButton>Select Level</MainButton>
                </StackList>
            </ScreenStackLayoutContent>
            <ScreenStackLayoutBottom>
                <AlignRight>
                    <FlowList>
                        <MainButton>Quit</MainButton>
                        <MainButton>Nope</MainButton>
                    </FlowList>
                </AlignRight>
            </ScreenStackLayoutBottom>
        </ScreenStackLayout>
    ),
};

export const LoadingScreen: StoryObj = {
    render: () => (
        <ScreenStackLayout
            style={{
                backgroundColor: "#000",
                padding: Spacing.l,
                color: "white",
            }}
        >
            <ScreenStackLayoutTop></ScreenStackLayoutTop>

            <ScreenStackLayoutContent>
                <VerticalCenter>
                    <Gauge value={0.5} label="50%" />
                </VerticalCenter>
            </ScreenStackLayoutContent>

            <ScreenStackLayoutBottom>
                <SmallLabel style={{ textAlign: "center" }}>
                    Things are loading...
                </SmallLabel>
            </ScreenStackLayoutBottom>
        </ScreenStackLayout>
    ),
};
