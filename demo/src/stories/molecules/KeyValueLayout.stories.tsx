import { Frame, KeyValueLayout, SmallLabel } from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
    title: "Molecules/KeyValueLayout",
    component: KeyValueLayout,
};

export const Simple: StoryObj = {
    render: () => (
        <Frame>
            <KeyValueLayout>
                <SmallLabel>Key</SmallLabel>
                <SmallLabel>Value</SmallLabel>
            </KeyValueLayout>

            <KeyValueLayout>
                <SmallLabel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum mauris urna, sed fermentum ante aliquet
                    sed.{" "}
                </SmallLabel>
                <SmallLabel>Value</SmallLabel>
            </KeyValueLayout>

            <KeyValueLayout>
                <SmallLabel>Key</SmallLabel>
                <SmallLabel>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer interdum mauris urna, sed fermentum ante aliquet
                    sed.{" "}
                </SmallLabel>
            </KeyValueLayout>
        </Frame>
    ),
};
