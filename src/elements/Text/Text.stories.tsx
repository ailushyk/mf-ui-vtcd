import { Text, TextProps } from './Text';
import { Story } from '@storybook/react';

export default {
  component: Text,
  title: 'Elements/Text',
};

const Template: Story<TextProps> = (args) => <Text {...args}>example</Text>;

export const Simple = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  transform: 'uppercase',
};

export const Bold = Template.bind({});
Bold.args = {
  bold: true,
};
