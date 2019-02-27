import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../../components/App';
import Container from '../../components/Container';
import ImageCard from '../../components/ImageCard';

const stories = storiesOf('Cards', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('ImageCard', () => {
  const imageCard = {
    image: {
      src: 'https://placehold.it/400x400',
      width: 400,
      height: 400,
    },
    label: `Technology`,
    heading: `Using Banners Will Increase Trade Show Traffic`,
    preamble: `There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.`,
  };

  return (
    <Container width="tiny">
      <div style={{ maxWidth: '400px' }}>
        <ImageCard
          image={imageCard.image}
          label={imageCard.label}
          heading={imageCard.heading}
          preamble={imageCard.preamble}
        />
      </div>
    </Container>
  );
});
