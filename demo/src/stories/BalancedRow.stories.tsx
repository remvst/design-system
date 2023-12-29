import { BalancedRow, StackList, MainButton, Frame } from '@remvst/design-system';
import React from 'react';
import '../screen-layout-preview.css';
import { StoryObj } from '@storybook/react';

export default {
    title: 'Utils/BalancedRow',
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
}
