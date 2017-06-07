import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import LiqenCreator from '../src/drawer/LiqenCreator';
// import PropTypes from 'prop-types';

storiesOf('LiqenCreator', module).add('static', () => (
  <LiqenCreator
    answer={[
      {
        tag: {
          id: 1,
          title: 'Tag 1'
        },
        required: true,
        annotation: {
          key: 1,
          id: 1,
          target: {
            prefix: 'hola ',
            exact: 'mundo',
            suffix: '!'
          }
        }
      },
      {
        tag: {
          id: 2,
          title: 'Tag 2'
        },
        required: true
      },
      {
        tag: {
          id: 3,
          title: 'Tag 3'
        },
        required: false
      }
    ]}
    onRemoveAnnotation={action('remove annotation')}
    onSubmit={action('submit')}
  />
));
