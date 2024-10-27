import {
    DialogBottomBar,
    DialogContent,
    DialogLayout,
    DialogTopBar,
    DialogTopBarCenter,
    DialogTopBarLeft,
    FlowList,
    MainButton,
    MainTitle,
    SmallLabel,
    TransitioningDim,
} from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React, { useRef } from "react";

export default {
    title: "Organisms/DialogLayout",
    component: DialogLayout,
    parameters: {
        layout: "fullscreen",
    },
};

export const PackedDialog: StoryObj = {
    render: () => {
        const ref = useRef<TransitioningDim>(null);

        return (
            <TransitioningDim ref={ref}>
                <DialogLayout isPacked={true}>
                    <DialogTopBar>
                        <DialogTopBarCenter>
                            <MainTitle>Packed Dialog</MainTitle>
                        </DialogTopBarCenter>
                    </DialogTopBar>

                    <DialogContent>
                        <SmallLabel>Some message</SmallLabel>
                    </DialogContent>

                    <DialogBottomBar>
                        <FlowList>
                            <MainButton
                                onClick={() => ref.current?.animateOut()}
                            >
                                No
                            </MainButton>
                            <MainButton
                                onClick={() => ref.current?.animateOut()}
                            >
                                Yes
                            </MainButton>
                        </FlowList>
                    </DialogBottomBar>
                </DialogLayout>
            </TransitioningDim>
        );
    },
};

export const UnpackedDialog: StoryObj = {
    render: () => {
        const ref = useRef<TransitioningDim>(null);

        return (
            <TransitioningDim ref={ref}>
                <DialogLayout isPacked={false}>
                    <DialogTopBar>
                        <DialogTopBarCenter>
                            <MainTitle>Unpacked Dialog</MainTitle>
                        </DialogTopBarCenter>
                    </DialogTopBar>

                    <DialogContent>
                        <SmallLabel>Some message</SmallLabel>
                    </DialogContent>

                    <DialogBottomBar>
                        <FlowList>
                            <MainButton
                                onClick={() => ref.current?.animateOut()}
                            >
                                No
                            </MainButton>
                            <MainButton
                                onClick={() => ref.current?.animateOut()}
                            >
                                Yes
                            </MainButton>
                        </FlowList>
                    </DialogBottomBar>
                </DialogLayout>
            </TransitioningDim>
        );
    },
};

export const FullscreenDialog: StoryObj = {
    render: () => {
        const ref = useRef<TransitioningDim>(null);

        return (
            <TransitioningDim ref={ref}>
                <DialogLayout isModal={true}>
                    <DialogTopBar>
                        <DialogTopBarLeft />
                        <DialogTopBarCenter>
                            <MainTitle>Fullscreen Dialog</MainTitle>
                        </DialogTopBarCenter>
                        <DialogTopBar>
                            <MainButton
                                onClick={() => ref.current?.animateOut()}
                            >
                                Close
                            </MainButton>
                        </DialogTopBar>
                    </DialogTopBar>

                    <DialogContent>
                        <SmallLabel>Some message</SmallLabel>
                    </DialogContent>

                    <DialogBottomBar>
                        <FlowList>
                            <MainButton
                                onClick={() => ref.current?.animateOut()}
                            >
                                No
                            </MainButton>
                            <MainButton
                                onClick={() => ref.current?.animateOut()}
                            >
                                Yes
                            </MainButton>
                        </FlowList>
                    </DialogBottomBar>
                </DialogLayout>
            </TransitioningDim>
        );
    },
};

export const PromptDialog: StoryObj = {
    render: () => {
        const ref = useRef<TransitioningDim>(null);

        return (
            <TransitioningDim ref={ref}>
                <DialogLayout isPacked={true}>
                    <DialogTopBar>
                        <DialogTopBarCenter>
                            <MainTitle>Prompt Dialog</MainTitle>
                        </DialogTopBarCenter>
                    </DialogTopBar>

                    <DialogContent>
                        <input type="text" />
                    </DialogContent>

                    <DialogBottomBar>
                        <FlowList>
                            <MainButton
                                onClick={() => ref.current?.animateOut()}
                            >
                                No
                            </MainButton>
                            <MainButton
                                onClick={() => ref.current?.animateOut()}
                            >
                                Yes
                            </MainButton>
                        </FlowList>
                    </DialogBottomBar>
                </DialogLayout>
            </TransitioningDim>
        );
    },
};
