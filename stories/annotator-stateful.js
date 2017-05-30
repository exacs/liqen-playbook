import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Annotator from '../src/Annotator';

const tags = [
  { id: 1, title: 'Tag 1' },
  { id: 2, title: 'Tag 2' },
  { id: 3, title: 'Tag 3' }
];

class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      annotations: [],
      tags
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreate({ target, tag }) {
    const id = this.state.annotations.length + 1;

    this.setState(prevState => ({
      annotations: prevState.annotations.concat({
        id,
        target,
        tag
      })
    }));
  }

  handleDelete({ id }) {
    this.setState(prevState => ({
      annotations: prevState.annotations.filter(
        annotation => annotation.id !== id
      )
    }));
  }

  render() {
    return (
      <div>
        <Annotator
          annotations={this.state.annotations}
          tags={this.state.tags}
          onCreateAnnotation={a => this.handleCreate(a)}
          onDeleteAnnotation={a => this.handleDelete(a)}
        >
          This is a text and you can highlight this
        </Annotator>
      </div>
    );
  }
}

storiesOf('Annotator', module).add('stateful Annotator', () => <Stateful />);
