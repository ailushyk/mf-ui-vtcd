import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { ActionProps } from './Action';

export const ActionBase: FC<ActionProps> = ({ children, ...props }) => {
  return (
    <Button {...props} textTransform="uppercase">
      {children}
    </Button>
  );
};

ActionBase.defaultProps = {
  disabled: false,
};
