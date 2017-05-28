import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Highlighter from '../src/Highlighter';

storiesOf('Highlighter', module).add('1', () => (
  <Highlighter>
    This is a text <em>With an emphashis</em> inside
  </Highlighter>
));

storiesOf('TaggerTooltip', module).add('1', () => <button />);

storiesOf('AnnotationSelector', module).add('1', () => <button />);

storiesOf('Annotator', module).add('1', () => <button />);
