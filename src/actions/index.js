export const updateBook = (bookIdentifier,updatedBook)=>{
    return{
        type: 'UPDATEBOOK',
        bookIdentifier:bookIdentifier,
        updatedBook:updatedBook,
    }
}

export const onEditTrue = ()=>{
    return{
        type: 'ONEDITTRUE',
        
    }
}

export const onEditFalse = ()=>{
    return{
        type: 'ONEDITFALSE',
        
    }
}


export const loadEditBook = (book)=>{
    return{
        type: 'LOADEDITBOOK',
        payload: book,
    }
}

export const toggleAdd = ()=>{
    return{
        type: 'TOGGLEADD',
        
    }
}

export const showAdd = ()=>{
    return{
        type: 'SHOWADD',
        
    }
}

export const hideAdd = ()=>{
    return{
        type: 'HIDEADD',
        
    }
}

export const showEdit = ()=>{
    return{
        type: 'SHOWEDIT',
        
    }
}

export const hideEdit = ()=>{
    return{
        type: 'HIDEEDIT',
        
    }
}

export const toggleEdit = ()=>{
    return{
        type: 'TOGGLEEDIT',
        
    }
}

export const deleteBook = (input)=>{
    return{
        type: 'DELETEBOOK',
        payload: input,

    }
}

export const addBook = (input)=>{
    return{
        type: 'ADDBOOK',
        payload: input,

    }
}