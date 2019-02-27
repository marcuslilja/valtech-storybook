import React from 'react';

import Box from './Box';
import Text from './Text';
import Image from './Image';

export default function Author(props) {
  const { name, title, imageSrc } = props;

  return (
    <Box display="flex" alignItems="center">
      <Box marginRight="tiny">
        <Image src={imageSrc} width={60} height={60} />
      </Box>
      <Box>
        <Text as="p" color="midGray" fontSize="small">
          {title}
        </Text>
        <Text
          as="p"
          fontSize="small"
          fontFamily="primary"
          fontWeight="medium"
          textTransform="uppercase"
        >
          {name}
        </Text>
      </Box>
    </Box>
  );
}
