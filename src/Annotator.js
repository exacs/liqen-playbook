/**
 * Le Grand Annotator
 *
 * Inputs
 * - Array of tags
 *
 * Callbacks
 * - onAnnotate()  - Create an annotation (tag + target)
 */

// import Popper from 'popper.js';
import React from 'react';
import PropTypes from 'prop-types';

import Highlighter from './Highlighter';
import TaggerTooltip from './TaggerTooltip';
import Selector from './Selector';

export default class Annotator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnnotation: null
    };

    this.handleSelectAnnotation = this.handleSelectAnnotation.bind(this);
  }

  handleSelectAnnotation(selectedAnnotation) {
    this.setState({ selectedAnnotation });
  }

  render() {
    const selectedTag =
      this.state.selectedAnnotation && this.state.selectedAnnotation.tag;

    const selectedFragment =
      this.state.selectedAnnotation && this.state.selectedAnnotation.target;

    return (
      <div>
        <div>
          <h2>Select an annotation</h2>
          <Selector
            list={this.props.annotations}
            onSelect={annotation => this.handleSelectAnnotation(annotation)}
          />
        </div>
        <h2>See how the annotation is highglighted</h2>
        <p>
          <Highlighter
            onHighlight={(fragment, node) => {}}
            fragment={selectedFragment}
          >
            {this.props.children}
          </Highlighter>
        </p>
        <h2>And its tag selected</h2>
        <div>
          <TaggerTooltip list={this.props.tags} selected={selectedTag} />
        </div>
      </div>
    );
  }
}

Annotator.propTypes = {
  annotations: PropTypes.array,
  tags: PropTypes.array,
  children: PropTypes.node
};
