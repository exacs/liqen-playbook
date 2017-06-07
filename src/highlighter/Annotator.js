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

import Popper from 'popper.js';
import React from 'react';
import PropTypes from 'prop-types';

import Highlighter from './Highlighter';
import TaggerTooltip from './Tagger';
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
    this.popper = new Popper(this.paragraph, this.tooltip, {
      placement: 'right-start'
    });
  }

  handleHighlight(fragment, range) {
    this.setState({
      newAnnotation: { target: fragment }
    });
    this.popper = new Popper(range, this.tooltip, {
      placement: 'right-start'
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
          position: 'relative',
          margin: '30px'
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
        <div ref={node => (this.paragraph = node)}>
          <Highlighter
            onHighlight={(fragment, range) =>
              this.handleHighlight(fragment, range)}
            onUnhighlight={() => this.handleUnhighlight()}
            fragment={selectedFragment}
          >
            {this.props.children}
          </Highlighter>
        </div>
        <h2>And its tag selected</h2>
        <div ref={node => (this.tooltip = node)}>
          <div
            style={{
              position: 'absolute',
              left: '-30px',
              top: '-41px',
              width: '100px'
            }}
          >
            {(selectedTag || this.state.newAnnotation.target) &&
              <TaggerTooltip
                list={this.props.tags}
                selected={selectedTag}
                onSelect={tag => this.handleSelectTag(tag)}
                onUnselect={() => this.handleUnselectTag()}
              />}
          </div>
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
