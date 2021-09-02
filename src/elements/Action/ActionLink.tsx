import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { ActionLinkProps } from './Action';

export const ActionLink: FC<ActionLinkProps> = ({ children, ...props }) => (
  <Button {...props} textTransform="uppercase">
    {children}
  </Button>
);
