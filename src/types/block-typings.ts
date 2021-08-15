import { RichText } from '@notionhq/client/build/src/api-types';

export type BulletedListBlockProps = {};

export type HeadingBlockProps = {
  text: RichText[];
  // TODO(pascal): is there a nicer way of infering these types directly from the notion api types?
  type: 'heading_1' | 'heading_2' | 'heading_3';
};

export type ListBlockItemProps = {
  text: RichText[];
  type: 'bulleted_list_item' | 'numbered_list_item';
};

export type RichTextBlockProps = {
  text: RichText[];
  as?: 'div' | 'span' | 'p' | 'plain';
};

export type ToggleBlockProps = {
  open?: boolean;
  text: RichText[];
};

export type RenderType =
  | JSX.Element
  | JSX.IntrinsicElements
  | RenderType[]
  | string
  | number
  | boolean
  | null;

export type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: (children: RenderType) => RenderType;
  children: RenderType;
};
