import React from 'react';

import { ListBlockItemProps } from '../types';

import { RichTextBlock } from './RichTextBlock';

export const ListBlockItem: React.FC<
  React.PropsWithChildren<ListBlockItemProps>
> = ({ text, children }) => {
  // TODO: A list block item can contain more children
  return (
    <li>
      <RichTextBlock as={'plain'} text={text} />
      {children}
    </li>
  );
};
