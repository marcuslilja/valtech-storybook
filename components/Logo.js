import React from 'react';

import Box from './Box';
import Text from './Text';

export default function Logo() {
  return (
    <Box>
      <Text
        as="span"
        color="almostBlack"
        fontSize="medium"
        fontFamily="secondary"
        fontWeight="bold"
        textDecoration="none"
      >
        Deck
      </Text>
      <Text
        as="span"
        color="coralPink"
        fontSize="medium"
        fontFamily="secondary"
        fontWeight="bold"
        textDecoration="none"
      >
        .
      </Text>
    </Box>
  );
}
