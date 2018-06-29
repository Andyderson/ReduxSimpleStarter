//State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            //Always return fresh object, do not, for example, set state.title = book.title
            return action.payload;
    }
    return state;
};