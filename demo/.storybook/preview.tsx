import { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ height: "100%" }}>
        <style>
          {`
              html, body, #storybook-root {
                  height: 100%;
                  background: lightgray;
              }
            `}
        </style>
        <Story />
      </div>
    ),
  ],
};

export default preview;
