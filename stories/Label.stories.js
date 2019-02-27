import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Label from '../components/Label';
import Container from '../components/Container';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Label', () => {
  return (
    <Container width="large">
      <div style={{ display: 'inline-block' }}>
        <Label>Lorem ipsum dolor sit amet</Label>
      </div>
    </Container>
  );
});
