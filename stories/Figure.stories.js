import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Box from '../components/Box';
import Figure from '../components/Figure';
import Container from '../components/Container';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Figure', () => {
  return (
    <Container width="tiny">
      <Figure>
        <Box
          style={{ width: '400px', height: '400px' }}
          backgroundColor="catskillWhite"
        >
          &lt;Figure&gt;
        </Box>
        <Figure.Caption>
          <Box padding="small" backgroundColor="alto">
            &lt;Figure.Caption&gt;
          </Box>
        </Figure.Caption>
      </Figure>
    </Container>
  );
});
