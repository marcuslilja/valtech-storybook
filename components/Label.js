import React from 'react';

import Box from './Box';
import Text from './Text';

export default function Label(props) {
  const { children, ...rest } = props;

  return (
    <Text
      as={Box}
      color="white"
      fontSize="tiny"
      fontFamily="primary"
      fontWeight="medium"
      paddingTop="tiny"
      paddingLeft="medium"
      paddingRight="medium"
      paddingBottom="tiny"
      letterSpacing="2"
      textTransform="uppercase"
      backgroundColor="coralPink"
      {...rest}
    >
      {children}
    </Text>
  );
}
