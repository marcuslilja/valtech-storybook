import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Box from '../components/Box';
import Heading1 from '../components/Heading1';
import Heading2 from '../components/Heading2';
import Container from '../components/Container';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Heading', () => {
  return (
    <Container>
      <Box marginBottom="tiny">
        <Heading1>Heading 1</Heading1>
      </Box>
      <Box marginBottom="tiny">
        <Heading2>Heading 2</Heading2>
      </Box>
    </Container>
  );
});
