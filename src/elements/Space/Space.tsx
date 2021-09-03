import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

export interface SpaceProps {
  p?: string | number;
  m?: string;
  color?: string;
  bg?: string;
}

export const Space: FC<SpaceProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
