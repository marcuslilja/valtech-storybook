import React from 'react';

import Box from './Box';
import Label from './Label';
import Image from './Image';
import Figure from './Figure';
import Preamble from './Preamble';
import Heading2 from './Heading2';

export default function ImageCard(props) {
  const { image, label, heading, preamble } = props;

  return (
    <Box>
      <Box marginBottom="small">
        <Figure>
          <Image {...image} />
          <Figure.Caption>
            <Label>{label}</Label>
          </Figure.Caption>
        </Figure>
      </Box>
      <Box marginBottom="small">
        <Heading2>{heading}</Heading2>
      </Box>
      <Box>
        <Preamble>{preamble}</Preamble>
      </Box>
    </Box>
  );
}
