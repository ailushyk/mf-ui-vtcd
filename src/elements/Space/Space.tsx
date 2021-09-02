import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

export interface SpaceProps {
  value?: string;
}

export const Space: FC<SpaceProps> = ({ children }) => {
  return <Box>{children}</Box>;
};
