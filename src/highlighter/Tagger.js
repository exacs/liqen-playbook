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
      color: '#FFF',
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      background: '#000',
      borderRadius: '5px'
    }}
  >
    {selected
      ? <div>
          <button
            style={{
              color: '#FFF',
              display: 'inline-block',
              padding: '5px',
              fontSize: '20px',
              fontWeight: 'bold',
              background: 'none',
              border: 0,
              cursor: 'pointer',
              outline: 'none'
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
                <button
                  style={{
                    color: '#FFF',
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    padding: '5px',
                    background: 'none',
                    border: 0,
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                  onClick={() => onSelect(tag.id)}
                >
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
