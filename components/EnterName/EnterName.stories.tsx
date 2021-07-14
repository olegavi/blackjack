import React, { ComponentProps } from "react";
import { Story } from "@storybook/react";
import { EnterName } from "./index";

export default {
  title: "components/EnterName",
  component: EnterName,
};

const Template: Story<ComponentProps<typeof EnterName>> = (args) => (
  <EnterName {...args} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  user: {
    name: "oleg",
  },
};
