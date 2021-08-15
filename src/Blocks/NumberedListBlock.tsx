import React from 'react';

export const NumberedListBlock: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <ol>{children}</ol>;
};
