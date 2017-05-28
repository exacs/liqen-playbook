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
    return <span>{this.props.children}</span>;
  }
}

Highlighter.propTypes = {
  children: PropTypes.node
};
