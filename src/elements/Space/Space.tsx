import React, { FC } from 'react';
import { Box, Center, Flex } from '@chakra-ui/react';

export interface SpaceProps {
  p?: string | number;
  m?: string;
  color?: string;
  bg?: string;
  flex?: boolean;
}

export const Space: FC<SpaceProps> = ({ flex, children, ...props }) => {
  if (flex) {
    return (
      <Flex {...props} justifyContent={'center'} alignContent={'center'}>
        {children}
      </Flex>
    );
  }
  return <Box {...props}>{children}</Box>;
};
