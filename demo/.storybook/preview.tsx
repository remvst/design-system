import { Preview } from '@storybook/react';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
        <div style={{height: '100%'}}>
          <style>
            {`
              html, body, #storybook-root {
                  height: 100%;
                  background: lightgray;
              }

              body {
                  font-family: Arial;
              }

              .main-button {
                  padding: var(--spacing-xs);
                  text-transform: uppercase;
                  font-weight: bold;

                  background: rgba(255, 255, 255, 0.1);
              }

              .stack-list>div, .flow-list>div {
                  padding: var(--spacing-xxs);
              }

              .stack-list, .flow-list {
                  padding: var(--spacing-xxs);
              }

              .screen-stack-layout {
                  padding: var(--spacing-xxl);
              }
            `}
          </style>
          <Story />
        </div>
    ),
  ],
};

export default preview;
