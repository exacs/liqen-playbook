import React from 'react';
import PropTypes from 'prop-types';

export default function LiqenCreator({ onSubmit, onRemoveAnnotation, answer }) {
  return (
    <div>
      <ul>
        {answer.map(({ annotation, tag, required }) => (
          <li key={tag.id}>
            <div>{tag.title}</div>
            {required && <div>*</div>}
            {annotation &&
              <div>
                {annotation.target.exact}
                <button onClick={() => onRemoveAnnotation(annotation)}>
                  X
                </button>
              </div>}
          </li>
        ))}
      </ul>
      <button onClick={() => onSubmit()}>Create Liqen</button>
    </div>
  );
}

LiqenCreator.propTypes = {
  answer: PropTypes.array,
  onRemoveAnnotation: PropTypes.func,
  onSubmit: PropTypes.func
};
