import React from 'react';
import { Disclosure } from '@headlessui/react';

var BulletedListBlock = function BulletedListBlock(_ref) {
  var children = _ref.children;
  return React.createElement("ul", null, children);
};

var escapedNewLineToLineBreakTag = function escapedNewLineToLineBreakTag(string) {
  return string.split('\n').map(function (item, index) {
    return index === 0 ? item : [React.createElement("br", {
      key: index
    }), item];
  });
};
var ConditionalWrapper = function ConditionalWrapper(_ref) {
  var condition = _ref.condition,
      wrapper = _ref.wrapper,
      children = _ref.children;
  return condition ? wrapper(children) : children;
};

var RichTextBlock = function RichTextBlock(_ref) {
  var text = _ref.text,
      as = _ref.as;
  var displayComponent = as || 'plain';
  var textContent = text.map(function (textPart) {
    return React.createElement(ConditionalWrapper, {
      key: textPart.plain_text,
      condition: textPart.annotations.bold,
      wrapper: function wrapper(childs) {
        return React.createElement("b", null, childs);
      }
    }, React.createElement(ConditionalWrapper, {
      condition: textPart.annotations.italic,
      wrapper: function wrapper(childs) {
        return React.createElement("i", null, childs);
      }
    }, React.createElement(ConditionalWrapper, {
      condition: textPart.annotations.strikethrough,
      wrapper: function wrapper(childs) {
        return React.createElement("del", null, childs);
      }
    }, React.createElement(ConditionalWrapper, {
      condition: textPart.annotations.underline,
      wrapper: function wrapper(childs) {
        return React.createElement("u", null, childs);
      }
    }, React.createElement(ConditionalWrapper, {
      condition: textPart.annotations.code,
      wrapper: function wrapper(childs) {
        return React.createElement("code", null, childs);
      }
    }, escapedNewLineToLineBreakTag(textPart.plain_text))))));
  });

  switch (displayComponent) {
    case 'p':
      return React.createElement("p", null, textContent);

    case 'div':
      return React.createElement("div", null, textContent);

    case 'span':
      return React.createElement("span", null, textContent);

    case 'plain':
    default:
      return React.createElement(React.Fragment, null, textContent);
  }
};

var HeadingBlock = function HeadingBlock(_ref) {
  var text = _ref.text,
      type = _ref.type;
  var content = React.createElement(RichTextBlock, {
    as: 'plain',
    text: text
  });

  switch (type) {
    case 'heading_1':
    default:
      return React.createElement("h1", null, content);

    case 'heading_2':
      return React.createElement("h2", null, content);

    case 'heading_3':
      return React.createElement("h3", null, content);
  }
};

var ListBlockItem = function ListBlockItem(_ref) {
  var text = _ref.text,
      children = _ref.children;
  return React.createElement("li", null, React.createElement(RichTextBlock, {
    as: 'plain',
    text: text
  }), children);
};

var NumberedListBlock = function NumberedListBlock(_ref) {
  var children = _ref.children;
  return React.createElement("ol", null, children);
};

var ToggleBlock = function ToggleBlock(_ref) {
  var text = _ref.text,
      children = _ref.children;
  return React.createElement(Disclosure, null, React.createElement(Disclosure.Button, null, React.createElement(RichTextBlock, {
    text: text
  })), React.createElement(Disclosure.Panel, null, children));
};

export { BulletedListBlock, ConditionalWrapper, HeadingBlock, ListBlockItem, NumberedListBlock, RichTextBlock, ToggleBlock };
//# sourceMappingURL=index.modern.js.map
