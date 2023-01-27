import React from 'react';
import { List } from 'react-virtualized';
import { dataSet } from './utils';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <h4>Rendering long lists using virtualization with React - <a href="https://www.cluemediator.com">Clue Mediator</a></h4>
      <List
        width={500}
        height={300}
        rowCount={dataSet.length}
        rowHeight={50}
        rowRenderer={Item}
        className='list-box'
      />
    </div>
  );
}

export default App;