import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Annotator from '../src/highlighter/Annotator';

storiesOf('Annotator', module).add('input and output', () => (
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
      onCreateAnnotation={action('create annotation')}
      onDeleteAnnotation={action('remove annotation')}
    >
      <p>This is a highlightable text</p>
    </Annotator>
  </div>
));
