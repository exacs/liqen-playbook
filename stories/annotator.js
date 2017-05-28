import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Highlighter from '../src/Highlighter';

storiesOf('Highlighter', module)
  .add('dumb', () => (
    <Highlighter>
      This is a text <em>With an emphashis</em> inside
    </Highlighter>
  ))
  .add('with pre-selected text', () => (
    <Highlighter
      fragment={{
        prefix: 'This is a text with ',
        exact: 'an emphasis',
        suffix: ' inside'
      }}
    >
      This is a text <em>With an emphashis</em> inside
    </Highlighter>
  ));

storiesOf('TaggerTooltip', module).add('1', () => <button />);

storiesOf('AnnotationSelector', module).add('1', () => <button />);

storiesOf('Annotator', module).add('1', () => <button />);
