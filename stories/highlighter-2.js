import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Highlighter from '../src/highlighter/Highlighter';

storiesOf('Highlighter actions', module).add('Dumbs', () => (
  <div>
    <p>
      <Highlighter
        onHighlight={action('highlight')}
        onUnhighlight={action('unh')}
      >
        Children is a <em>string</em>
      </Highlighter>
      <span>This text is outside</span>
    </p>
  </div>
));
