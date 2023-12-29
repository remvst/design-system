import {
  FlowList,
  Frame,
  VerticalCenter,
  SmallLabel,
  AlignRight,
  Gauge,
  MainButton,
  Dim,
  StackList,
  ScreenStackLayout,
  ScreenStackLayoutTop,
  ScreenStackLayoutContent,
  ScreenStackLayoutBottom,
  MainTitle,
} from "@remvst/design-system";
import React from "react";
import { StoryObj } from "@storybook/react";

export default {
  title: "Layouts/ScreenStackLayout",
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
        <Frame>
          <StackList>
            <MainButton>Play</MainButton>
            <MainButton>Settings</MainButton>
            <MainButton>Select Level</MainButton>
          </StackList>
        </Frame>
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
    <ScreenStackLayout>
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

export const ConfirmationDialog: StoryObj = {
  render: () => (
    <Dim>
      <ScreenStackLayout>
        <VerticalCenter>
          <Frame style={{ minWidth: "50%", maxWidth: "80%", margin: "auto" }}>
            <MainTitle style={{ textAlign: "center" }}>Confirm?</MainTitle>
            <SmallLabel style={{ textAlign: "center", margin: "20px" }}>
              Would you like to do the thing?
            </SmallLabel>

            <FlowList>
              <MainButton>Yes</MainButton>
              <MainButton>No</MainButton>
            </FlowList>
          </Frame>
        </VerticalCenter>
      </ScreenStackLayout>
    </Dim>
  ),
};
