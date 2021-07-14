import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  title: "components/Avatar",
  component: Avatar,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#000" }],
    },
  },
};

const Template: Story<ComponentProps<typeof Avatar>> = (args) => (
  <Avatar {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  user: "player",
  wallet: {
    player: 0,
    computer: 0,
  },
  name: "NAME",
};
