/* global document */
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
    this.handleUnhighlight = this.handleUnhighlight.bind(this);
  }

  handleSelectAnnotation(selectedAnnotation) {
    this.setState({ selectedAnnotation });
  }

  handleHighlight(fragment) {
    this.setState({
      newAnnotation: { target: fragment }
    });
  }

  handleUnhighlight() {
    this.setState({
      selectedAnnotation: null,
      newAnnotation: { target: null }
    });
  }

  handleSelectTag(tagId) {
    if (this.state.newAnnotation.target) {
      this.props.onCreateAnnotation({
        target: this.state.newAnnotation.target,
        tag: tagId
      });

      document.getSelection().removeAllRanges();
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
      this.state.selectedAnnotation && this.state.selectedAnnotation.tag;

    const selectedFragment =
      this.state.selectedAnnotation && this.state.selectedAnnotation.target;

    return (
      <div
        style={{
          position: 'relative'
        }}
      >
        <div
          style={{
            marginLeft: '-24px',
            position: 'absolute'
          }}
        >
          <Selector
            list={this.props.annotations}
            selected={this.state.selectedAnnotation}
            onSelect={annotation => this.handleSelectAnnotation(annotation)}
          />
        </div>
        <Highlighter
          onHighlight={fragment => this.handleHighlight(fragment)}
          onUnhighlight={() => this.handleUnhighlight()}
          fragment={selectedFragment}
        >
          {this.props.children}
        </Highlighter>
        <h2>And its tag selected</h2>
        <div>
          {(selectedTag || this.state.newAnnotation.target) &&
            <TaggerTooltip
              list={this.props.tags}
              selected={selectedTag}
              onSelect={tag => this.handleSelectTag(tag)}
              onUnselect={() => this.handleUnselectTag()}
            />}
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
