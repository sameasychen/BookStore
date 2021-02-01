const editBookReducer = (state={} , action) => {
    switch (action.type) {
        case 'LOADEDITBOOK':
            return action.payload;
        default:
            return state;
    }
}

export default editBookReducer;