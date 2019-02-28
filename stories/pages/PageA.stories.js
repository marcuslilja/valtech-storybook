import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import cards from './PageA.data';

import App from '../../components/App';
import Box from '../../components/Box';
import Grid from '../../components/Grid';
import Container from '../../components/Container';
import ImageCard from '../../components/ImageCard';
import HeaderNavigation from '../../components/HeaderNavigation';
import FooterNavigation from '../../components/FooterNavigation';

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Page Example #A', () => (
  <>
    <HeaderNavigation />
    <Box
      paddingTop="medium"
      paddingBottom="medium"
      backgroundColor="catskillWhite"
    >
      <Container width="large">
        <Grid columns="3" rowGap="medium" columnGap="medium">
          {cards.map((card, key) => (
            <Grid.Item key={key}>
              <ImageCard
                image={card.image}
                label={card.label}
                heading={card.heading}
                preamble={card.preamble}
              />
            </Grid.Item>
          ))}
        </Grid>
      </Container>
    </Box>
    <FooterNavigation />
  </>
));
