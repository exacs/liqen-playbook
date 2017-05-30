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
      selectedAnnotation: null,
      newAnnotation: {
        target: null
      }
    };

    this.handleSelectAnnotation = this.handleSelectAnnotation.bind(this);
    this.handleHighlight = this.handleHighlight.bind(this);
  }

  handleSelectAnnotation(selectedAnnotation) {
    this.setState({ selectedAnnotation });
  }

  handleHighlight(fragment) {
    this.setState({
      newAnnotation: { target: fragment }
    });
  }

  handleSelectTag(tagId) {
    if (this.state.newAnnotation.target) {
      this.props.onCreateAnnotation({
        target: this.state.newAnnotation.target,
        tag: tagId
      });
      this.setState({
        selectedAnnotation: null,
        newAnnotation: { target: null }
      });
    }
  }

  handleUnselectTag() {
    this.props.onDeleteAnnotation(this.state.selectedAnnotation);
    this.setState({ selectedAnnotation: null });
  }

  render() {
    const selectedTag =
      !this.state.newAnnotation.target &&
      this.state.selectedAnnotation &&
      this.state.selectedAnnotation.tag;

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
            onHighlight={fragment => this.handleHighlight(fragment)}
            fragment={selectedFragment}
          >
            {this.props.children}
          </Highlighter>
        </p>
        <h2>And its tag selected</h2>
        <div>
          <TaggerTooltip
            list={this.props.tags}
            selected={selectedTag}
            onSelect={tag => this.handleSelectTag(tag)}
            onUnselect={() => this.handleUnselectTag()}
          />
        </div>
      </div>
    );
  }
}

Annotator.propTypes = {
  annotations: PropTypes.array,
  tags: PropTypes.array,
  children: PropTypes.node,
  onCreateAnnotation: PropTypes.func,
  onDeleteAnnotation: PropTypes.func
};
