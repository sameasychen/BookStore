import showAddReducer from './showAdd';
import showEditReducer from './showEdit';
import bookListReducer from './bookList';
import loadEditBookReducer from './loadEditBook';
import onEditFlagReducer from './onEditFlag';


import {combineReducers} from 'redux';

const allReducers = combineReducers({
    bookList: bookListReducer,
    showAdd: showAddReducer,
    showEdit: showEditReducer,
    loadEditBook: loadEditBookReducer,
    onEditFlag: onEditFlagReducer,

})

export default allReducers;