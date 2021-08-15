import React from 'react';

import { HeadingBlockProps } from '../types';

import { RichTextBlock } from './RichTextBlock';

export const HeadingBlock: React.FC<
  React.PropsWithChildren<HeadingBlockProps>
> = ({ text, type }) => {
  const content = <RichTextBlock as={'plain'} text={text} />;

  switch (type) {
    case 'heading_1':
    default:
      return <h1>{content}</h1>;
    case 'heading_2':
      return <h2>{content}</h2>;
    case 'heading_3':
      return <h3>{content}</h3>;
  }
};
