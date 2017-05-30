/**
 * Tooltip to select a tag
 *
 * Inputs
 * - tagList
 * - position
 * - visible
 *
 * Outputs
 * - onTag()
 */
import React from 'react';
import PropTypes from 'prop-types';

const TaggerTooltip = ({ list, selected, onSelect, onUnselect }) => (
  <div>
    {selected
      ? <div>
          <div>
            Selected: {list.filter(tag => tag.id === selected)[0].title}
          </div>
          <div onClick={() => onUnselect()}>Unselect</div>
        </div>
      : <ul>
          {list.map(tag => (
            <li key={tag.id} onClick={() => onSelect(tag.id)}>{tag.title}</li>
          ))}
        </ul>}
  </div>
);

TaggerTooltip.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  onUnselect: PropTypes.func
};

export default TaggerTooltip;
