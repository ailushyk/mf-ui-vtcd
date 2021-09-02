import { Box, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Link as RLink } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <Box>
      <Text>Page not found</Text>
      <Link as={RLink} to="/" color="red.400" textDecoration={'underline'}>
        Please, Go Home
      </Link>
    </Box>
  );
};

export default NotFound;
