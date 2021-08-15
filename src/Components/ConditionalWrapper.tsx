import React from 'react';

import { ConditionalWrapperProps, RenderType } from '../types';

export const escapedNewLineToLineBreakTag = (string: string): RenderType => {
  return string.split('\n').map((item, index) => {
    return index === 0 ? item : [<br key={index} />, item];
  });
};

export const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
}: ConditionalWrapperProps): any => (condition ? wrapper(children) : children);
