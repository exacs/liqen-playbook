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
      <div
        style={{
          maxWidth: '720px',
          margin: '30px',
          fontFamily: 'Georgia'
        }}
      >
        <Annotator
          annotations={this.state.annotations}
          tags={this.state.tags}
          onCreateAnnotation={a => this.handleCreate(a)}
          onDeleteAnnotation={a => this.handleDelete(a)}
        >
          <p
            style={{
              fontSize: '21px',
              lineHeight: '1.58'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non mi quis sapien blandit ornare eget nec sapien. Praesent diam ante, pellentesque ac elit quis, egestas ultrices mi. Nam vitae viverra est, facilisis cursus sapien. Etiam nisl ligula, rhoncus eu lobortis mollis, blandit venenatis magna. Fusce vitae dignissim turpis, nec feugiat orci. Vestibulum metus nunc, tincidunt et purus non, ultrices tempor tortor. Praesent consequat nisi vel lectus laoreet, eu vestibulum elit placerat. Integer neque tellus, mattis quis bibendum id, tristique et libero. Nunc ac turpis molestie, porttitor nulla vitae, venenatis ex. Maecenas fermentum facilisis erat, vitae eleifend metus ullamcorper a. Quisque sed eros luctus nibh volutpat luctus at ac odio. Vestibulum fermentum pretium leo euismod gravida. Sed elementum consectetur lectus quis eleifend. Nam nec tellus lorem.
          </p>
        </Annotator>
      </div>
    );
  }
}

storiesOf('Annotator', module).add('stateful Annotator', () => <Stateful />);
