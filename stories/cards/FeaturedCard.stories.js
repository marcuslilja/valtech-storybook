import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../../components/App';
import Container from '../../components/Container';
import FeaturedCard from '../../components/FeaturedCard';

const stories = storiesOf('Cards', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('FeaturedCard', () => {
  const featuredCard1 = {
    image: {
      src: 'https://placehold.it/400x250',
      width: 400,
      height: 250,
    },
    label: `Finance`,
    heading: `Using Banners Will Increase Trade Show Traffic`,
    preamble: `There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.`,
    social: {
      views: 173,
      shares: 275,
      comments: 403,
    },
  };

  return (
    <Container width="tiny">
      <div style={{ maxWidth: '400px' }}>
        <FeaturedCard
          image={featuredCard1.image}
          label={featuredCard1.label}
          social={featuredCard1.social}
          heading={featuredCard1.heading}
          preamble={featuredCard1.preamble}
        />
      </div>
    </Container>
  );
});
