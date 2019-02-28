import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import cards from './PageB.data';

import App from '../../components/App';
import Box from '../../components/Box';
import Grid from '../../components/Grid';
import Container from '../../components/Container';
import ArticleCard from '../../components/ArticleCard';
import FeaturedCard from '../../components/FeaturedCard';
import HeaderNavigation from '../../components/HeaderNavigation';
import FooterNavigation from '../../components/FooterNavigation';

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Page Example #B', () => (
  <>
    <HeaderNavigation />
    <Box
      paddingTop="medium"
      paddingBottom="medium"
      backgroundColor="catskillWhite"
    >
      <Container width="large">
        <Box marginBottom="medium">
          <Grid columns="3" rowGap="medium" columnGap="medium">
            <Grid.Item>
              <FeaturedCard
                image={cards.featuredCard1.image}
                label={cards.featuredCard1.label}
                social={cards.featuredCard1.social}
                heading={cards.featuredCard1.heading}
                preamble={cards.featuredCard1.preamble}
              />
            </Grid.Item>
            <Grid.Item>
              <FeaturedCard
                image={cards.featuredCard2.image}
                label={cards.featuredCard2.label}
                social={cards.featuredCard2.social}
                heading={cards.featuredCard2.heading}
                preamble={cards.featuredCard2.preamble}
              />
            </Grid.Item>
          </Grid>
        </Box>
        <Grid
          style={{ boxShadow: '0 5px 15px 0 rgba(0, 0, 0, 0.05)' }}
          rowGap="medium"
          columns="3"
        >
          <Grid.Item style={{ borderRight: '1px solid #d6d6d6' }}>
            <ArticleCard
              label={cards.articleCard1.label}
              author={cards.articleCard1.author}
              heading={cards.articleCard1.heading}
              publishedAt={cards.articleCard1.publishedAt}
            />
          </Grid.Item>
          <Grid.Item style={{ borderRight: '1px solid #d6d6d6' }}>
            <ArticleCard
              label={cards.articleCard1.label}
              author={cards.articleCard1.author}
              heading={cards.articleCard1.heading}
              publishedAt={cards.articleCard1.publishedAt}
            />
          </Grid.Item>
          <Grid.Item>
            <ArticleCard
              label={cards.articleCard1.label}
              author={cards.articleCard1.author}
              heading={cards.articleCard1.heading}
              publishedAt={cards.articleCard1.publishedAt}
            />
          </Grid.Item>
        </Grid>
      </Container>
    </Box>
    <FooterNavigation />
  </>
));
