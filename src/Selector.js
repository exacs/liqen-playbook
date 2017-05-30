/**
 * Select an Annotation among an array of them
 *
 * Input
 * - Array of annotations
 *
 * Output
 * - onSelect(id or annotation)
 */
import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({ list, selected, onSelect }) => (
  <div>
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        fontFamily: 'sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#CCC'
      }}
    >
      {list.map(obj => (
        <li
          key={obj.id}
          style={
            selected && selected.id === obj.id
              ? {
                  color: 'green'
                }
              : {}
          }
        >
          <button onClick={() => onSelect(obj)}>*</button>
        </li>
      ))}
    </ul>
  </div>
);

Selector.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onSelect: PropTypes.func
};

export default Selector;
