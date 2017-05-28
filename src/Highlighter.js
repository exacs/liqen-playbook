import React from 'react';
import PropTypes from 'prop-types';

/**
 * Highlight a text and handles the highlighting action
 *
 * Inputs
 * - fragment to select (prefix, suffix, exact)
 *
 * Outputs
 * - onHighlight(fragment, position)
 */
export default class Highlighter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.children}</p>;
  }
}

Highlighter.propTypes = {
  children: PropTypes.node
};
