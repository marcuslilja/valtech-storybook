import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Box from '../components/Box';
import Image from '../components/Image';
import Container from '../components/Container';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Image', () => {
  return (
    <Container width="large">
      <Box style={{ maxWidth: '200px' }} marginBottom="tiny">
        <Image src="http://placehold.it/200x200" width={200} height={200} />
      </Box>
      <Box style={{ maxWidth: '400px' }} marginBottom="tiny">
        <Image src="http://placehold.it/400x200" width={400} height={200} />
      </Box>
    </Container>
  );
});
