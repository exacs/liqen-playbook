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
    const children = this.props.children;

    return (
      <span>
        {React.Children.count(children) > 1
          ? renderArray(children)
          : renderNode(children)}
      </span>
    );
  }
}

function renderNode(e) {
  if (typeof e === 'string') {
    return e;
  } else if (e.type && e.props && e.props.children) {
    return React.createElement(
      e.type,
      e.props,
      <Highlighter>{e.props.children}</Highlighter>
    );
  } else {
    return 'You are trying to render something not-valid :(';
  }
}

function renderArray(arr) {
  return React.Children.map(arr, child => <Highlighter>{child}</Highlighter>);
}

Highlighter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node
  ])
};
