import React from 'react';
import { dataSet } from './utils';

const Item = ({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) => {
  return (
    <div key={key} style={style} className='item'>
      Clue Mediator - {dataSet[index]}
    </div>
  );
}

export default Item;