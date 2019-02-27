import React from 'react';

import Text from './Text';

export default function Preamble(props) {
  const { children, ...rest } = props;

  return (
    <Text as="p" color="midGray" fontSize="small" {...rest}>
      {children}
    </Text>
  );
}
