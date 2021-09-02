import React from 'react';

import { Meta } from '@storybook/react';

import { Space } from './Space';

export default {
  component: Space,
  title: 'Elements/Space',
} as Meta;

export const Primary: React.VFC<{}> = () => <Space>Space</Space>;
