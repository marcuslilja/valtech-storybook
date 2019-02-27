import React from 'react';

import Box from './Box';
import Text from './Text';
import Author from './Author';
import Heading2 from './Heading2';

export default function ArticleCard(props) {
  const { label, author = {}, heading, publishedAt } = props;

  return (
    <Box backgroundColor="white">
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
        <Box marginBottom="tiny">
          <Text as="p" color="midGray" fontSize="small">
            {publishedAt}
          </Text>
        </Box>
        <Box marginBottom="tiny">
          <Author
            name={author.name}
            title={author.title}
            imageSrc={author.imageSrc}
          />
        </Box>
      </Box>
    </Box>
  );
}
