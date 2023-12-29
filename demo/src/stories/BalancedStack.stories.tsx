import { BalancedStack } from '@remvst/design-system';
import React from 'react';
import { StoryObj } from '@storybook/react';

export default {
    title: 'Utils/BalancedStack',
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
}
