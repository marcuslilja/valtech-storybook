import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';

import App from '../components/App';
import Box from '../components/Box';
import Text from '../components/Text';
import Grid from '../components/Grid';
import Container from '../components/Container';

const stories = storiesOf('Layouts', module);

stories.addDecorator(withKnobs);
stories.addDecorator((storyFn) => <App>{storyFn()}</App>);

stories.add('Grid', () => {
  const columns = select(
    'Columns',
    { One: '1', Two: '2', Three: '3', Four: '4', Five: '5', Six: '6' },
    '3',
  );

  const columnValues = [...Array(Number(columns)).keys()].map((x) => (x += 1));

  return (
    <Container width="large">
      <Grid columns={columns} columnGap="medium">
        {columnValues.map((item) => (
          <Grid.Item key={item}>
            <Box padding="small" backgroundColor="coralPink">
              <Text color="glacierWhite" textAlign="center" fontWeight="bold">
                Column {item}
              </Text>
            </Box>
          </Grid.Item>
        ))}
      </Grid>
    </Container>
  );
});
