import {
    DialogBottomBar,
    DialogContent,
    DialogLayout,
    DialogTopBar,
    DialogTopBarCenter,
    DialogTopBarLeft,
    Dim,
    FlowList,
    MainButton,
    MainTitle,
    SmallLabel,
} from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
    title: "Organisms/DialogLayout",
    component: DialogLayout,
    parameters: {
        layout: "fullscreen",
    },
};

export const Dialog: StoryObj = {
    render: () => (
        <Dim>
            <DialogLayout isPacked={true}>
                <DialogTopBar>
                    <DialogTopBarCenter>
                        <MainTitle>Dialog Title</MainTitle>
                    </DialogTopBarCenter>
                </DialogTopBar>

                <DialogContent>
                    <SmallLabel>Some message</SmallLabel>
                </DialogContent>

                <DialogBottomBar>
                    <FlowList>
                        <MainButton>No</MainButton>
                        <MainButton>Yes</MainButton>
                    </FlowList>
                </DialogBottomBar>
            </DialogLayout>
        </Dim>
    ),
};

export const FullscreenDialog: StoryObj = {
    render: () => (
        <Dim>
            <DialogLayout isModal={true}>
                <DialogTopBar>
                    <DialogTopBarLeft />
                    <DialogTopBarCenter>
                        <MainTitle>Dialog Title</MainTitle>
                    </DialogTopBarCenter>
                    <DialogTopBar>
                        <MainButton>Close</MainButton>
                    </DialogTopBar>
                </DialogTopBar>

                <DialogContent>
                    <SmallLabel>Some message</SmallLabel>
                </DialogContent>

                <DialogBottomBar>
                    <FlowList>
                        <MainButton>No</MainButton>
                        <MainButton>Yes</MainButton>
                    </FlowList>
                </DialogBottomBar>
            </DialogLayout>
        </Dim>
    ),
};

export const UnpackedDialog: StoryObj = {
    render: () => (
        <Dim>
            <DialogLayout isPacked={false}>
                <DialogTopBar>
                    <DialogTopBarCenter>
                        <MainTitle>Dialog Title</MainTitle>
                    </DialogTopBarCenter>
                </DialogTopBar>

                <DialogContent>
                    <SmallLabel>Some message</SmallLabel>
                </DialogContent>

                <DialogBottomBar>
                    <FlowList>
                        <MainButton>No</MainButton>
                        <MainButton>Yes</MainButton>
                    </FlowList>
                </DialogBottomBar>
            </DialogLayout>
        </Dim>
    ),
};
