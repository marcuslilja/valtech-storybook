import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Preamble from '../components/Preamble';
import Container from '../components/Container';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Preamble', () => {
  return (
    <Container width="tiny">
      <Preamble>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis
        posuere turpis sed laoreet. Aliquam vitae faucibus sem. Cras sagittis
        cursus quam, non dictum magna gravida quis. Ut et vulputate arcu, et
        ultrices augue. Sed bibendum dui pharetra massa pellentesque suscipit.
        Donec malesuada arcu a justo hendrerit, a pulvinar eros laoreet. Vivamus
        sodales lacinia imperdiet.
      </Preamble>
    </Container>
  );
});
