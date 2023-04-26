import React, { useState } from 'react';
import ToDoLists from './components/ToDoLists';
import './App.css';

function App() {
  //delete items
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        console.log(arrElement + '  ' + index);
        return index !== id;
      });
    });
  };

  //list
  const [Items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listOfItems = (e) => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };
  const [inputList, setInputList] = useState('');
  return (
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type='text'
          placeholder='Add a Items'
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listOfItems}> + </button>

        <ol>
          {Items.map((itemval, index) => {
            return (
              <ToDoLists
                text={itemval}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
