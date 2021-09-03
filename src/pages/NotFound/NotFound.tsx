import { Box, Button, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link as RLink } from 'react-router-dom';
import { Action } from '../../elements';

const NotFound: FC = () => {
  return (
    <Box>
      <Text>Page not found</Text>
      <Button as={RLink} to="/" color="red.400" textDecoration={'underline'}>
        Please, Go Home
      </Button>

      {/*<Action.Link as={RLink} to="/">*/}
      {/*  Please, Go Home*/}
      {/*</Action.Link>*/}
    </Box>
  );
};

export default NotFound;
