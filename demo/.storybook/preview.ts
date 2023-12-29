import { Preview } from '@storybook/react';

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
  previewHead: (head) => `
    ${head}
    <style>
      html, body {
        background: gray;
      }
    </style>
  `,
};

export default preview;
