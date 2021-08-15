/// <reference types="react" />
import { RichText } from '@notionhq/client/build/src/api-types';
export declare type BulletedListBlockProps = {};
export declare type HeadingBlockProps = {
    text: RichText[];
    type: 'heading_1' | 'heading_2' | 'heading_3';
};
export declare type ListBlockItemProps = {
    text: RichText[];
    type: 'bulleted_list_item' | 'numbered_list_item';
};
export declare type RichTextBlockProps = {
    text: RichText[];
    as?: 'div' | 'span' | 'p' | 'plain';
};
export declare type ToggleBlockProps = {
    open?: boolean;
    text: RichText[];
};
export declare type RenderType = JSX.Element | JSX.IntrinsicElements | RenderType[] | string | number | boolean | null;
export declare type ConditionalWrapperProps = {
    condition: boolean;
    wrapper: (children: RenderType) => RenderType;
    children: RenderType;
};
