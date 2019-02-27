import React from 'react';

import Box from './Box';
import Line from './Line';
import Text from './Text';
import Image from './Image';
import Icons from './Icons';
import Preamble from './Preamble';
import Heading2 from './Heading2';

export default function FeaturedCard(props) {
  const { image = {}, label, heading, preamble, social = {} } = props;

  return (
    <Box
      style={{ boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.05)' }}
      backgroundColor="white"
    >
      {image.src && <Image {...image} />}
      <Box padding="small">
        <Box marginBottom="tiny">
          <Text
            color="coralPink"
            fontSize="small"
            fontWeight="medium"
            fontFamily="primary"
            textTransform="uppercase"
            letterSpacing="2"
          >
            {label}
          </Text>
        </Box>
        <Box marginBottom="tiny">
          <Heading2>{heading}</Heading2>
        </Box>
        <Preamble>{preamble}</Preamble>
      </Box>
      <Line backgroundColor="mercury" />
      <Box display="flex" alignItems="center" padding="small">
        <Text as={Box} color="midGray" fontSize="tiny" marginRight="small">
          <Box display="flex" alignItems="center">
            <Icons.Share size="small" />
            <Box marginLeft="tiny">{social.shares}</Box>
          </Box>
        </Text>
        <Text as={Box} color="midGray" fontSize="tiny" marginRight="small">
          <Box display="flex" alignItems="center">
            <Icons.Eye size="small" />
            <Box marginLeft="tiny">{social.views}</Box>
          </Box>
        </Text>
        <Text as={Box} color="midGray" fontSize="tiny" marginRight="small">
          <Box display="flex" alignItems="center">
            <Icons.SpeechBubble size="small" />
            <Box marginLeft="tiny">{social.comments}</Box>
          </Box>
        </Text>
      </Box>
    </Box>
  );
}
