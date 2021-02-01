import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { deleteBook, showAdd, loadEditBook, showEdit, onEditTrue } from './actions';

function BookList() {

  const bookList = useSelector(state => state.bookList);

  const dispatch = useDispatch();

  const onEditPage = (book) => {

    dispatch(showEdit());

    dispatch(loadEditBook(book));

    dispatch(onEditTrue());

  }

  const allBtns = document.querySelectorAll('button')

  allBtns.disabled = true;

  return (
    <div className="ListPage">

      <h2>BookList</h2>
      <div>
        <button
          className="addBtn btn btn-success"
          onClick={() => dispatch(showAdd())}>Add New Book</button>
      </div>
      <ul className='row mt-3'>
        {bookList.map((data, index) =>
          <li
            className='bookList col-3 rounded mb-5'
            key={index}>

            <button
              className="h-100 w-100 rounded btn-block"
              onClick={() => onEditPage(data)}

            >

              <p>{data.name}</p>
              <p>{data.price}</p>
              <p>{data.category}</p>

            </button>

              <button
              className='btn btn-primary btn-block'
              onClick={() => dispatch(deleteBook(data.name))}>Delete</button>
          </li>


        )}
      </ul>

    </div>
  );
}

export default BookList;
