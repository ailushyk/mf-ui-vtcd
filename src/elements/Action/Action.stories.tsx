import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Action, ActionProps } from './Action';

export default {
  component: Action,
  title: 'Elements/Action/Action',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ActionProps> = (args) => (
  <Action {...args}>Example</Action>
);

export const Simple = Template.bind({});

export const Solid = Template.bind({});

Solid.args = {
  variant: 'solid',
  disabled: false,
  onClick: () => {
    console.log('on click');
  },
};

export const Outline = Template.bind({});

Outline.args = {
  variant: 'outline',
  disabled: false,
  onClick: () => {
    console.log('on click');
  },
};

export const Ghost = Template.bind({});

Ghost.args = {
  variant: 'ghost',
  disabled: false,
  onClick: () => {
    console.log('on click');
  },
};

export const Link = Template.bind({});

Link.args = {
  variant: 'link',
  disabled: false,
  onClick: () => {
    console.log('on click');
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  onClick: () => {
    console.log('on click');
  },
};
