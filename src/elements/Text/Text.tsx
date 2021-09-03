import React, { FC } from 'react';
import { Text as CText } from '@chakra-ui/react';

export interface TextProps {
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  bold?: boolean;
  transform?: 'uppercase' | 'capitalize';
}

export const Text: FC<TextProps> = ({ size, bold, transform, children }) => {
  return (
    <CText
      fontWeight={bold ? 'bold' : 'normal'}
      fontSize={size}
      casing={transform}
    >
      {children}
    </CText>
  );
};
