import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { hideEdit, onEditFalse, updateBook } from './actions';


function BookEdit() {

  const loadEditBook = useSelector(state => state.loadEditBook);
  const onEditFlag = useSelector(state => state.onEditFlag);

  const dispatch = useDispatch();


  const [nameInput, setNameInput] = useState('')
  const [priceInput, setPriceInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')


  useEffect(() => {

    if (onEditFlag) {
      setNameInput(loadEditBook.name);
      setPriceInput(loadEditBook.price);
      setCategoryInput(loadEditBook.category);
      setDescriptionInput(loadEditBook.description);
      console.log("remount")
    }
  })


  let handleNameChange = (event) => {

    if (onEditFlag) {
      dispatch(onEditFalse())
    }
    setNameInput(event.target.value);

  }

  let handlePriceChange = (event) => {

    if (onEditFlag) {
      dispatch(onEditFalse())
    }
    setPriceInput(event.target.value);

  }

  let handleCategoryChange = (event) => {
    if (onEditFlag) {
      dispatch(onEditFalse())
    }
    setCategoryInput(event.target.value);

  }

  let handleDescriptionChange = (event) => {
    if (onEditFlag) {
      dispatch(onEditFalse())
    }
    setDescriptionInput(event.target.value);

  }


  let onUpdate = () => {


    if (nameInput !== '') {

    const bookIdentifier = loadEditBook.name;

    const updatedBook = {};

    updatedBook.name = nameInput;
    updatedBook.price = priceInput;
    updatedBook.category = categoryInput;
    updatedBook.description = descriptionInput;

    dispatch(updateBook(bookIdentifier, updatedBook))

    dispatch(hideEdit());
    }else{
      alert("Book name can not be empty!")
    }

  }

  return (
    <div className="PopupWindow border">

      <button
        onClick={() => dispatch(hideEdit())}
      >X</button>
      <h2>Edit the book</h2>

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
        onClick={onUpdate}
      >Update</button>

    </div >
  );
}

export default BookEdit;
