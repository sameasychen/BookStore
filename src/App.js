import React, { Component, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import BookEdit from './BookEdit'
import BookAdd from './BookAdd'
import BookList from './BookList'

function App() {

  const showAdd = useSelector(state => state.showAdd);
  const showEdit = useSelector(state => state.showEdit);


  // const [showingEdit, setShowingEdit] = useState(false)
  // const [showingAdd, setShowingAdd] = useState(true)


  return (
    <div className="App">


      <BookList/>

      {showEdit?<BookEdit/>:'' }
      
      {showAdd?<BookAdd/>:'' }


      


      {/* <BookEdit/> */}



      {/* <h2>Counter {counter}</h2>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>{text}</p> */}


      {/* <input
        name="nameInput"
        onChange={handleChange}
        value={nameInput}
      />
      <button onClick={() => dispatch(update(nameInput))}>update</button> */}

    </div>
  );
}

export default App;
