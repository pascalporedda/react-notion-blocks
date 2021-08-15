import React from 'react';

import {
  ConditionalWrapper,
  escapedNewLineToLineBreakTag,
} from '../Components/ConditionalWrapper';
import { RichTextBlockProps } from '../types';

export const RichTextBlock: React.FC<
  React.PropsWithChildren<RichTextBlockProps>
> = ({ text, as }) => {
  const displayComponent = as || 'plain';
  const textContent = text.map((textPart) => {
    return (
      <ConditionalWrapper
        key={textPart.plain_text}
        condition={textPart.annotations.bold}
        wrapper={(childs) => <b>{childs}</b>}
      >
        <ConditionalWrapper
          condition={textPart.annotations.italic}
          wrapper={(childs) => <i>{childs}</i>}
        >
          <ConditionalWrapper
            condition={textPart.annotations.strikethrough}
            wrapper={(childs) => <del>{childs}</del>}
          >
            <ConditionalWrapper
              condition={textPart.annotations.underline}
              wrapper={(childs) => <u>{childs}</u>}
            >
              <ConditionalWrapper
                condition={textPart.annotations.code}
                wrapper={(childs) => <code>{childs}</code>}
              >
                {escapedNewLineToLineBreakTag(textPart.plain_text)}
              </ConditionalWrapper>
            </ConditionalWrapper>
          </ConditionalWrapper>
        </ConditionalWrapper>
      </ConditionalWrapper>
    );
  });

  switch (displayComponent) {
    case 'p':
      return <p>{textContent}</p>;
    case 'div':
      return <div>{textContent}</div>;
    case 'span':
      return <span>{textContent}</span>;
    case 'plain':
    default:
      return <React.Fragment>{textContent}</React.Fragment>;
  }
};
