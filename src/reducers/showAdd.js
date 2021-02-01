const showAddReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLEADD':
            return !state;
        case 'HIDEADD':
            return false;
        case 'SHOWADD':
            return true;
        default:
            return state;
    }
}

export default showAddReducer;

