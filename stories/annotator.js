import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Highlighter from '../src/Highlighter';

storiesOf('Highlighter', module)
  .add('invalid types', () => (
    <div>
      <div>
        <Highlighter>
          {5}
        </Highlighter>
      </div>
      <div>
        <Highlighter>
          <p>Children is an element</p>
        </Highlighter>
      </div>
    </div>
  ))
  .add('dumbs', () => (
    <div>
      <div>
        <Highlighter>
          Children is a string
        </Highlighter>
      </div>
      <div>
        <Highlighter>
          Children is a <em>3-element</em> array
        </Highlighter>
      </div>
    </div>
  ))
  .add('with pre-selected text', () => (
    <Highlighter
      fragment={{
        prefix: 'This is a text with ',
        exact: '',
        suffix: 'an emphasis inside'
      }}
    >
      This is a text with an
    </Highlighter>
  ))
  .add('with pre-selected text 2', () => (
    <Highlighter
      fragment={{
        prefix: 'This is a text with ',
        exact: 'an emphasis',
        suffix: ' inside'
      }}
    >
      This is a text <em>with an emphashis</em> inside
    </Highlighter>
  ));

storiesOf('TaggerTooltip', module).add('1', () => <button />);

storiesOf('AnnotationSelector', module).add('1', () => <button />);

storiesOf('Annotator', module).add('1', () => <button />);
