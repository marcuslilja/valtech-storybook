import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Author from '../components/Author';
import Container from '../components/Container';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Author', () => {
  return (
    <Container width="large">
      <Author
        name="Nancy Sullivan"
        title="Author"
        imageSrc="http://placehold.it/60x60"
      />
    </Container>
  );
});
