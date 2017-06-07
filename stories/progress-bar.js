import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ProgressBar from '../src/drawer/ProgressBar';
import PropTypes from 'prop-types';

class CompleteBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };
  }

  componentDidMount() {
    this.timerID = setTimeout(() => this.complete(), this.props.time);
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  complete() {
    this.setState({ completed: true });
  }

  render() {
    return <ProgressBar completed={this.state.completed} />;
  }
}

CompleteBar.propTypes = {
  time: PropTypes.number
};

storiesOf('ProgressBar', module)
  .add('completed', () => <ProgressBar completed />)
  .add('non-completed', () => <ProgressBar />)
  .add('complete after 1s', () => <CompleteBar time={1000} />)
  .add('pending during some seconds', () => (
    <div>
      <div>
        <h2>0.5 second</h2>
        <CompleteBar time={500} />
      </div>
      <div>
        <h2>1 second</h2>
        <CompleteBar time={1000} />
      </div>
      <div>
        <h2>2 second</h2>
        <CompleteBar time={2000} />
      </div>
      <div>
        <h2>5 second</h2>
        <CompleteBar time={5000} />
      </div>
      <div>
        <h2>10 second</h2>
        <CompleteBar time={10000} />
      </div>
    </div>
  ));
