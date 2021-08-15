import React from 'react';

import { BulletedListBlockProps } from '../types';

export const BulletedListBlock: React.FC<
  React.PropsWithChildren<BulletedListBlockProps>
> = ({ children }) => {
  return <ul>{children}</ul>;
};
