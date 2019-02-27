import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Box from '../components/Box';
import Text from '../components/Text';
import Container from '../components/Container';

const stories = storiesOf('Layouts', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Container', () => {
  const width = select(
    'Widths',
    { Tiny: 'tiny', Small: 'small', Medium: 'medium', Large: 'large' },
    'tiny',
  );

  return (
    <Container width={width}>
      <Box padding="small" backgroundColor="coralPink">
        <Text color="white" textAlign="center" fontWeight="bold">
          Container
        </Text>
      </Box>
    </Container>
  );
});
