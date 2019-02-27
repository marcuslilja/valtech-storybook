import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Box from '../components/Box';
import Icons from '../components/Icons';
import Container from '../components/Container';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Icons', () => {
  return (
    <Container width="large">
      <Box display="flex" alignItems="center" marginBottom="tiny">
        <Icons.Eye />
        &nbsp;Eye
      </Box>
      <Box display="flex" alignItems="center" marginBottom="tiny">
        <Icons.Share />
        &nbsp;Share
      </Box>
      <Box display="flex" alignItems="center" marginBottom="tiny">
        <Icons.SpeechBubble />
        &nbsp;SpeechBubble
      </Box>
    </Container>
  );
});
