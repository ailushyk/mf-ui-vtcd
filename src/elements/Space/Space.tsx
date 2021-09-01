import React, { FC } from 'react';

export interface SpaceProps {
  value?: string;
}

export const Space: FC<SpaceProps> = ({ children }) => {
  return <div>{children}</div>;
};
