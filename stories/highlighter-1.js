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
          <p>Children is an element</p>
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
    <div>
      <div>
        <Highlighter
          fragment={{
            prefix: 'This is a text with ',
            exact: 'an',
            suffix: ' emphasis inside'
          }}
        >
          This is a text with an emphasis inside
        </Highlighter>
      </div>
      <div>
        <Highlighter
          fragment={{
            prefix: 'This is a text with ',
            exact: 'an invalid',
            suffix: ' emphasis inside'
          }}
        >
          This is a text with a non-valid emphasis inside
        </Highlighter>
      </div>
    </div>
  ))
  .add('with pre-selected text 2', () => (
    <div>
      <div>
        <Highlighter
          fragment={{
            prefix: 'This is a text with ',
            exact: 'an emphasis',
            suffix: ' inside'
          }}
        >
          This is a text <em>with an emphasis</em> inside
        </Highlighter>
      </div>
      <div>
        <Highlighter
          fragment={{
            prefix: 'This is a text with ',
            exact: 'an emphasis in',
            suffix: 'side'
          }}
        >
          This is a text <em>with an emphasis</em> inside
        </Highlighter>
      </div>
    </div>
  ))
  .add('with pre-selected text 3', () => (
    <div>
      <Highlighter
        fragment={{
          prefix: 'This is a text with ',
          exact: 'an emphasis in',
          suffix: 'side'
        }}
      >
        This is a text <em>with <strong>an</strong> emphasis</em> inside
      </Highlighter>
    </div>
  ));

// storiesOf('TaggerTooltip', module).add('1', () => <button />);
// storiesOf('AnnotationSelector', module).add('1', () => <button />);
// storiesOf('Annotator', module).add('1', () => <button />);
