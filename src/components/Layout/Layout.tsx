import React, { FC } from 'react';
import { Center, Container, VStack } from '@chakra-ui/react';
import { Space, Text } from '../../elements';

export interface LayoutProps {
  header?: string;
}

export const Layout: FC<LayoutProps> = ({ header, children }) => (
  <VStack>
    {header ? (
      <Container maxW="container.sm">
        <Space color={'white'} bg={'#1A365D'} p={6}>
          <Center>
            <Text size={'lg'} transform={'uppercase'} bold>
              {header}
            </Text>
          </Center>
        </Space>
      </Container>
    ) : null}

    <Container maxW="container.sm" colorScheme={'red'}>
      <Space p={5}>{children}</Space>
    </Container>
  </VStack>
);
