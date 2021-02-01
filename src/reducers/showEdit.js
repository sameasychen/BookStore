const showEditReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLEEDIT':
            return !state;
        case 'SHOWEDIT':
            return true;
        case 'HIDEEDIT':
            return false;
        default:
            return state;
    }
}

export default showEditReducer;