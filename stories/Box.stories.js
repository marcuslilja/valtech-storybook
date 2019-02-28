import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Box from '../components/Box';
import Text from '../components/Text';
import Container from '../components/Container';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Box', () => {
  const backgroundColor = select(
    'Backgroundcolor',
    {
      Alto: 'alto',
      Black: 'black',
      MidGray: 'midGray',
      Mercury: 'mercury',
      CoralPink: 'coralPink',
      AlmostBlack: 'almostBlack',
      GlacierWhite: 'glacierWhite',
      CatskillWhite: 'catskillWhite',
    },
    'alto',
  );

  const margin = select(
    'Margin',
    { Tiny: 'tiny', Small: 'small', Medium: 'medium', Large: 'large' },
    'tiny',
  );

  const padding = select(
    'Padding',
    { Tiny: 'tiny', Small: 'small', Medium: 'medium', Large: 'large' },
    'tiny',
  );

  return (
    <Container width="large">
      <Box margin={margin} padding={padding} backgroundColor={backgroundColor}>
        <Text color="glacierWhite" textAlign="center" fontWeight="bold">
          Box
        </Text>
      </Box>
    </Container>
  );
});
