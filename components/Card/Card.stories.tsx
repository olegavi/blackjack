import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { Card } from ".";

export default {
  title: "components/Card",
  component: Card,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "gray" }],
    },
  },
};

const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <Card {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  suit: "♣",
  value: 9,
};
