import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Annotator from '../src/Annotator';

storiesOf('Annotator', module).add('input', () => (
  <div>
    <Annotator
      annotations={[
        {
          id: 1,
          target: {
            prefix: 'This is a ',
            exact: 'highlightable',
            suffix: ' text'
          },
          tag: 1
        },
        {
          id: 2,
          target: {
            prefix: 'This is a highlight',
            exact: 'able',
            suffix: ' text'
          },
          tag: 3
        }
      ]}
      tags={[
        { id: 1, title: 'Tag 1' },
        { id: 2, title: 'Tag 2' },
        { id: 3, title: 'Tag 3' }
      ]}
    >
      <p>This is a highlightable text</p>
    </Annotator>
  </div>
));
