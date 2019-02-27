import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Text from '../components/Text';
import Container from '../components/Container';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Text', () => {
  const color = select(
    'Color',
    {
      Alto: 'alto',
      White: 'white',
      Black: 'black',
      MidGray: 'midGray',
      Mercury: 'mercury',
      CoralPink: 'coralPink',
      AlmostBlack: 'almostBlack',
      CatskillWhite: 'catskillWhite',
    },
    'almostBlack',
  );

  const fontSize = select(
    'Font size',
    { Tiny: 'tiny', Small: 'small', Medium: 'medium', Large: 'large' },
    'small',
  );

  const fontFamily = select(
    'Font family',
    { Primary: 'primary', Secondary: 'secondary' },
    'primary',
  );

  const fontWeight = select(
    'Font weight',
    {
      Thin: 'thin',
      ExtraLight: 'extraLight',
      Light: 'light',
      Normal: 'normal',
      Medium: 'medium',
      SemiBold: 'semiBold',
      Bold: 'bold',
      ExtraBold: 'extraBold',
      Black: 'black',
    },
    'normal',
  );

  return (
    <Container width="tiny">
      <Text
        color={color}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis
        posuere turpis sed laoreet. Aliquam vitae faucibus sem. Cras sagittis
        cursus quam, non dictum magna gravida quis. Ut et vulputate arcu, et
        ultrices augue. Sed bibendum dui pharetra massa pellentesque suscipit.
        Donec malesuada arcu a justo hendrerit, a pulvinar eros laoreet. Vivamus
        sodales lacinia imperdiet.
      </Text>
    </Container>
  );
});
