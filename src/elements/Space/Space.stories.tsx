import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Space } from './Space';

export default {
  component: Space,
  title: 'Elements/Space',
  argTypes: {
    bg: { control: 'color' },
  },
} as Meta;

export const Primary: Story = (args) => <Space {...args}>Space</Space>;
Primary.args = {
  m: 4,
  p: 4,
};

export const FlexSpace: Story = (args) => <Space {...args}>Space</Space>;
FlexSpace.args = {
  m: 4,
  p: 4,
  flex: true,
};
