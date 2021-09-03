import React, { FC } from 'react';
import { Space, Text } from '../../elements';

export const Header: FC = ({ children }) => (
  <Space color={'white'} bg={'#1A365D'} p={6}>
    <Text size={'lg'} transform={'uppercase'} bold>
      {children}
    </Text>
  </Space>
);
