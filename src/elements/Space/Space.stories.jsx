import React from 'react';

import { Space } from './Space';

export default {
  title: 'Elements/Space',
  component: Space,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Space>{args.exampleText}</Space>;

export const Simple = Template.bind({});
Simple.args = {
  example: 'Text test',
};
