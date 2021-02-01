import React, { Component, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { hideAdd, addBook } from './actions';


function BookAdd() {

  const dispatch = useDispatch();

  const [nameInput, setNameInput] = useState('')
  const [priceInput, setPriceInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')

  let handleNameChange = (event) => {

    setNameInput(event.target.value);

  }

  let handlePriceChange = (event) => {

    setPriceInput(event.target.value);

  }

  let handleCategoryChange = (event) => {

    setCategoryInput(event.target.value);

  }

  let handleDescriptionChange = (event) => {

    setDescriptionInput(event.target.value);

  }

  let onAdd = () => {

    if (nameInput !== '') {
      let bookInput = {};
      bookInput.name = nameInput;
      bookInput.price = priceInput;
      bookInput.category = categoryInput;
      bookInput.description = descriptionInput;


      dispatch(addBook(bookInput))

      dispatch(hideAdd())
    } else{
      alert("Book name is mandatory!")
    }
  }

  return (
    <div className="PopupWindow border">
      <button
        onClick={() => dispatch(hideAdd())}
      >X</button>
      <h2>Add a new book</h2>

      <div>

        <label>Name: </label>
        <input
          className='form-control mb-2'
          onChange={handleNameChange}
          value={nameInput}
        />

      </div>
      <div>
        <label>Price: </label>
        <input
          className='form-control mb-2'
          onChange={handlePriceChange}
          value={priceInput}
        />
      </div>
      <div>

        <label>Category: </label>
        <input
          className='form-control mb-2'
          onChange={handleCategoryChange}
          value={categoryInput}
        />

      </div>
      <div>
        <label>Description: </label>
        <input
          className='form-control mb-2'
          onChange={handleDescriptionChange}
          value={descriptionInput}
        />
      </div>

      <button
        className='btn btn-primary btn-block mt-3'
        onClick={() => onAdd()}
      >Add</button>

    </div>
  );
}

export default BookAdd;
