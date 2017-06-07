import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TaggerTooltip from '../src/highlighter/Tagger';

class WithState extends React.Component {
  constructor() {
    super();
    this.state = { selected: null };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleUnselect = this.handleUnselect.bind(this);
  }

  handleSelect(id) {
    this.setState({ selected: id });
  }

  handleUnselect() {
    this.setState({ selected: null });
  }

  render() {
    return (
      <TaggerTooltip
        list={[
          { id: 1, title: 'Tag 1' },
          { id: 2, title: 'Tag 2' },
          { id: 3, title: 'Tag 3' }
        ]}
        selected={this.state.selected}
        onSelect={id => this.handleSelect(id)}
        onUnselect={() => this.handleUnselect()}
      />
    );
  }
}

storiesOf('Tagger', module)
  .add('nothing selected', () => (
    <TaggerTooltip
      list={[
        { id: 1, title: 'Tag 1' },
        { id: 2, title: 'Tag 2' },
        { id: 3, title: 'Tag 3' }
      ]}
    />
  ))
  .add('number 1 selected', () => (
    <TaggerTooltip
      list={[
        { id: 1, title: 'Tag 1' },
        { id: 2, title: 'Tag 2' },
        { id: 3, title: 'Tag 3' }
      ]}
      selected={1}
    />
  ))
  .add('with state', () => <WithState />);
