const onEditFlagReducer = (state = true, action) => {
    switch (action.type) {
        case 'ONEDITTRUE':
            return true;
        case 'ONEDITFALSE':
            return false;
        default:
            return state;
    }
}

export default onEditFlagReducer;