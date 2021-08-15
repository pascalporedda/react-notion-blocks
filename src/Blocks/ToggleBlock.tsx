import React from 'react';
import { Disclosure } from '@headlessui/react';

import { ToggleBlockProps } from '../types';

import { RichTextBlock } from './RichTextBlock';

// TODO: we need options to handle an open, close state manually / programmatically and a way to style the button I guess
export const ToggleBlock: React.FC<React.PropsWithChildren<ToggleBlockProps>> =
  ({ text, children }) => {
    return (
      <Disclosure>
        <Disclosure.Button>
          <RichTextBlock text={text} />
        </Disclosure.Button>
        <Disclosure.Panel>{children}</Disclosure.Panel>
      </Disclosure>
    );
  };
