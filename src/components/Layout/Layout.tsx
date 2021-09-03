import React, { FC } from 'react';
import { Container, VStack } from '@chakra-ui/react';
import { Header } from '../Header/Header';
import { Space } from '../../elements';

export interface LayoutProps {
  header?: string;
}

export const Layout: FC<LayoutProps> = ({ header, children }) => (
  <VStack>
    {header ? (
      <Container maxW="container.sm">
        <Header>{header}</Header>
      </Container>
    ) : null}

    <Container maxW="container.sm">
      <Space p={5}>{children}</Space>
    </Container>
  </VStack>
);
