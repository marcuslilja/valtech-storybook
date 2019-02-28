import React from 'react';

import Box from './Box';
import Text from './Text';

export default function Logo(props) {
  const { color = 'almostBlack' } = props;

  return (
    <Box>
      <Text
        as="span"
        color={color}
        fontSize="medium"
        fontFamily="secondary"
        fontWeight="bold"
        textDecoration="none"
      >
        techVal
      </Text>
      <Text
        as="span"
        color="coralPink"
        fontSize="medium"
        fontFamily="secondary"
        fontWeight="bold"
        textDecoration="none"
      >
        _
      </Text>
    </Box>
  );
}
