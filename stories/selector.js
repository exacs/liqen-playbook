import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Selector from '../src/Selector';

storiesOf('Selector', module).add('ii', () => (
  <Selector
    list={[
      { id: 1, value: 'Hola', other: 2 },
      { id: 2, meh: 'Muh', dog: 'bark' }
    ]}
    onSelect={action('select')}
  />
));
