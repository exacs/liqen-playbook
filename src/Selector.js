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
    <ul>
      {list.map(obj => <li key={obj.id} onClick={() => onSelect(obj)}>dot</li>)}
    </ul>
  </div>
);

Selector.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onSelect: PropTypes.func
};

export default Selector;
