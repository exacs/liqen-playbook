import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Highlighter from '../src/highlighter/Highlighter';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read: {
        prefix: '',
        suffix: '',
        exact: ''
      },
      write: {
        prefix: '',
        suffix: '',
        exact: ''
      }
    };
    this.handleHighlight.bind(this);
  }

  handleHighlight(obj) {
    this.setState({ read: obj });
  }

  mark() {
    this.setState(prev => ({
      write: prev.read,
      read: prev.read
    }));
  }

  render() {
    return (
      <div>
        <p>
          <Highlighter
            fragment={this.state.write}
            onHighlight={obj => this.handleHighlight(obj)}
          >
            Children is an <em>array</em> of several elements
          </Highlighter>
        </p>
        <p>
          <span>The result:</span>
          <div>Prefix: <mark>{this.state.read.prefix}</mark></div>
          <div>Exact: <mark>{this.state.read.exact}</mark></div>
          <div>Suffix: <mark>{this.state.read.suffix}</mark></div>
          <button onClick={() => this.mark()}>Highlight it!!</button>
        </p>
      </div>
    );
  }
}

storiesOf('In and out', module).add('Dumbs', () => <Story />);
