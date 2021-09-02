import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Action, ActionLinkProps } from './Action';

export default {
  component: Action,
  title: 'Elements/Action/Action.Link',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ActionLinkProps> = (args) => (
  <Action.Link {...args}>Example Link</Action.Link>
);

export const Simple = Template.bind({});
Simple.args = {
  as: 'a',
  to: '/home',
};

export const Solid = Template.bind({});

Solid.args = {
  as: 'a',
  to: '/home',
  variant: 'solid',
};

export const Outline = Template.bind({});

Outline.args = {
  as: 'a',
  to: '/home',
  variant: 'outline',
};

export const Ghost = Template.bind({});

Ghost.args = {
  as: 'a',
  to: '/home',
  variant: 'ghost',
};

export const Link = Template.bind({});

Link.args = {
  as: 'a',
  to: '/home',
  variant: 'link',
};

export const Disabled = Template.bind({});

Disabled.args = {
  as: 'a',
  to: '/home',
  disabled: true,
};
