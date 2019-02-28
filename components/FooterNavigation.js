import React from 'react';

import Box from './Box';
import Logo from './Logo';
import Text from './Text';
import Icons from './Icons';
import Container from './Container';

export default function FooterNavigation() {
  return (
    <Box backgroundColor="almostBlack">
      <Container width="large">
        <Box paddingTop="medium" paddingBottom="medium">
          <Box display="flex" alignItems="center">
            <Box>
              <Logo color="glacierWhite" />
              <Text color="glacierWhite" fontSize="small">
                &copy; 2018
              </Text>
            </Box>
            <Box marginLeft="auto">
              <Text color="alto">
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" marginRight="tiny">
                    Follow us:{' '}
                  </Box>
                  <Box display="flex" alignItems="center" marginRight="tiny">
                    <Icons.Instagram />
                  </Box>
                  <Box display="flex" alignItems="center" marginRight="tiny">
                    <Icons.Pinterest />
                  </Box>
                  <Box display="flex" alignItems="center" marginRight="tiny">
                    <Icons.Twitter />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Icons.Facebook />
                  </Box>
                </Box>
              </Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
