import bookArray from '../bookArray'

const bookListReducer = (state = bookArray, action) => {
    switch (action.type) {
        case 'ADDBOOK':
            let origArray = state.slice(0);
            origArray.push(action.payload);
            return origArray;
        case 'DELETEBOOK':
            let leftArray = state.filter(data => {

                return data.name !== action.payload;
            }
            )
            return leftArray;
        case 'UPDATEBOOK':
            let copyArray = state.slice(0);
            for(let i=0; i< copyArray.length; i++){
                if(copyArray[i].name=== action.bookIdentifier){
                    copyArray[i]=action.updatedBook
                }
            }

            return copyArray;
        default:
            return state;
    }
}

export default bookListReducer;