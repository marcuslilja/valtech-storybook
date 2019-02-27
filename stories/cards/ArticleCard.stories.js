import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import App from '../../components/App';
import Container from '../../components/Container';
import ArticleCard from '../../components/ArticleCard';

const stories = storiesOf('Cards', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('ArticleCard', () => {
  const articleCard1 = {
    author: {
      name: 'Kinga Cicewicz',
      title: 'Author',
      imageSrc: 'https://placehold.it/60x60x',
    },
    label: `Finance`,
    heading: `Using Banners Will Increase Trade Show Traffic`,
    publishedAt: `May 15, 2018`,
  };

  return (
    <Container width="tiny">
      <div style={{ maxWidth: '400px' }}>
        <ArticleCard
          label={articleCard1.label}
          author={articleCard1.author}
          heading={articleCard1.heading}
          publishedAt={articleCard1.publishedAt}
        />
      </div>
    </Container>
  );
});
