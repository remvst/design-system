import {
    LargeLabel,
    MediumLabel,
    SmallLabel,
    TinyLabel,
} from "@remvst/design-system";
import { StoryObj } from "@storybook/react";
import React from "react";

export default {
    title: "Atoms/Label",
};

interface Args {
    label: string;
}

export const Tiny: StoryObj<Args> = {
    args: { label: "Tiny label" },
    render: (args) => <TinyLabel>{args.label}</TinyLabel>,
};

export const Small: StoryObj<Args> = {
    args: { label: "Small label" },
    render: (args) => <SmallLabel>{args.label}</SmallLabel>,
};

export const Medium: StoryObj<Args> = {
    args: { label: "Medium label" },
    render: (args) => <MediumLabel>{args.label}</MediumLabel>,
};

export const Large: StoryObj<Args> = {
    args: { label: "Large label" },
    render: (args) => <LargeLabel>{args.label}</LargeLabel>,
};
