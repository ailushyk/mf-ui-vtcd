import React, { FC } from 'react';
import { Space, Text } from '../../elements';
import { Center } from '@chakra-ui/react';

export const Header: FC = ({ children }) => (
  <Space color={'white'} bg={'#1A365D'} p={6}>
    <Center>
      <Text size={'lg'} transform={'uppercase'} bold>
        {children}
      </Text>
    </Center>
  </Space>
);
