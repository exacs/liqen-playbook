/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import zip from 'lodash/zipWith';
import split from './split';

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

  componentDidMount() {
    if (!this.props.onHighlight) {
      return;
    }

    document.onselectionchange = () => {
      const selection = document.getSelection();

      if (selection.rangeCount === 0 || !this.node) {
        return;
      }

      const exactRange = selection.getRangeAt(0);
      const ancestor = exactRange.commonAncestorContainer;

      // Check that "this" contains the ancestor
      if (this.node.contains(ancestor) || this.node.isSameNode(ancestor)) {
        // Calculate the prefixRange and suffixRange
        const prefixRange = document.createRange();
        prefixRange.setStart(this.node, 0);
        prefixRange.setEnd(exactRange.startContainer, exactRange.startOffset);

        const prefix = prefixRange.toString();
        const exact = exactRange.toString();
        const suffix = this.node.textContent.slice(
          prefix.length + exact.length
        );

        const { top, left, width, height } = exactRange.getBoundingClientRect();

        if (exact !== '') {
          this.props.onHighlight(
            { prefix, exact, suffix },
            { top, left, width, height }
          );
        }
      }
    };
  }

  render() {
    const children = this.props.children;
    const text = childrenToString(this.props.children);
    const fragments = this.props.fragment
      ? split(this.props.fragment, text)
      : undefined;

    return (
      <span
        ref={node => {
          this.node = node;
        }}
      >
        {React.Children.count(children) > 1
          ? renderArray(children, fragments)
          : renderNode(children, fragments)}
      </span>
    );
  }
}

function childrenToString(e, flatten = false) {
  if (React.Children.count(e) > 1) {
    const arr = React.Children.toArray(e);

    if (flatten) {
      return arr.map(e => childrenToString(e, true)).join('');
    } else {
      return arr.map(e => childrenToString(e, true));
    }
  } else if (typeof e === 'string') {
    return e;
  } else if (e.type && e.props && e.props.children) {
    return childrenToString(e.props.children, true);
  } else {
    return 'You are passing something not valid';
  }
}

function renderNode(e, fragments) {
  if (typeof e === 'string' && fragments) {
    // eslint-disable-next-line react/jsx-key
    return [fragments.prefix, <mark>{fragments.exact}</mark>, fragments.suffix];
  } else if (typeof e === 'string') {
    return e;
  } else if (e.type && e.props && e.props.children) {
    return React.createElement(
      e.type,
      e.props,
      <Highlighter fragment={fragments}>{e.props.children}</Highlighter>
    );
  } else {
    return 'You are trying to render something not-valid :(';
  }
}

function renderArray(arr, fragments) {
  if (fragments && React.Children.count(arr) === fragments.length) {
    const arr1 = React.Children.toArray(arr);

    return zip(arr1, fragments, (child, fragment) => (
      <Highlighter fragment={fragment}>{child}</Highlighter>
    ));
  } else {
    return React.Children.map(arr, child => <Highlighter>{child}</Highlighter>);
  }
}

Highlighter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node
  ]),
  fragment: PropTypes.shape({
    prefix: PropTypes.string,
    exact: PropTypes.string,
    suffix: PropTypes.string
  }),
  onHighlight: PropTypes.func
};
