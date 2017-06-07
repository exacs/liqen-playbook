import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SelectableAnnotation from '../src/drawer/SelectableAnnotation';
import PropTypes from 'prop-types';

const a1 = {
  target: {
    preffix: 'Hola ',
    exact: 'mundo',
    suffix: '!'
  },
  tag: {
    id: 1,
    title: 'Tag 1'
  }
};

class Pending extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pending: true
    };
  }

  componentDidMount() {
    this.timerID = setTimeout(() => this.createEnd(), this.props.time);
  }

  createEnd() {
    this.setState({ pending: false });
  }

  render() {
    return (
      <SelectableAnnotation annotation={a1} pending={this.state.pending} />
    );
  }
}

Pending.propTypes = {
  time: PropTypes.number
};

storiesOf('SelectableAnnotation', module)
  .add('static props', () => (
    <SelectableAnnotation
      annotation={a1}
      checked
      onSelect={action('click annotation')}
    />
  ))
  .add('pending', () => (
    <SelectableAnnotation
      annotation={a1}
      pending
      onSelect={action('click annotation')}
    />
  ))
  .add('pending during some seconds', () => (
    <div>
      <h2>1 second</h2>
      <Pending time={1000} />
      <h2>2 second</h2>
      <Pending time={2000} />
      <h2>5 second</h2>
      <Pending time={5000} />
      <h2>10 second</h2>
      <Pending time={10000} />
    </div>
  ));
