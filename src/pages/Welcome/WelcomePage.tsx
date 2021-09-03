import React, { FC } from 'react';
import { Layout } from '../../components';
import { Container, HStack } from '@chakra-ui/react';
import { Action, Space } from '../../elements';
import { StarIcon } from '@chakra-ui/icons';

export interface WelcomeProps {
  header: string;
  items: string[];
}

const items = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  'Animi, architecto assumenda autem dicta ducimus esse inventore ipsa maxime minima.',
  'Numquam obcaecati quam ratione reiciendis repellendus sunt tempore?',
];

const WelcomePage: FC<WelcomeProps> = ({ header }) => (
  <Layout header={header}>
    <Container maxW={'xs'}>
      {items?.map((item) => (
        <HStack alignItems={'start'} mb={'6'}>
          <StarIcon mr={'2'} h={'10'} />
          <Space>{item}</Space>
        </HStack>
      ))}
    </Container>
    <Space flex p={'5'}>
      <Action.Link as={'a'} to={'/'}>
        Onboarding
      </Action.Link>
    </Space>
  </Layout>
);

export default WelcomePage;
