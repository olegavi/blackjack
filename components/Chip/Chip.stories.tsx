import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import { Chip } from "./Chip";

export default {
  title: "components/Chip",
  component: Chip,
};

const Template: Story<ComponentProps<typeof Chip>> = (args) => (
  <Chip {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  chipValue: 10,
};
