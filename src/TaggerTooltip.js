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
  <div
    style={{
      background: '#000',
      borderRadius: '8px',
      color: '#FFF',
      fontFamily: 'sans-serif',
      padding: '5px'
    }}
  >
    {selected
      ? <div>
          <button
            style={{
              display: 'inline-block',
              padding: '5px',
              fontSize: '20px',
              fontWeight: 'bold'
            }}
            onClick={() => onUnselect()}
          >
            ×
          </button>
          {list.filter(tag => tag.id === selected)[0].title}
        </div>
      : <div>
          <ul
            style={{
              padding: 0,
              margin: 0,
              listStyle: 'none'
            }}
          >
            {list.map(tag => (
              <li
                key={tag.id}
                style={{
                  padding: '5px'
                }}
              >
                <button onClick={() => onSelect(tag.id)}>
                  {tag.title}
                </button>
              </li>
            ))}
          </ul>
        </div>}
  </div>
);

TaggerTooltip.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  onUnselect: PropTypes.func
};

export default TaggerTooltip;
