import { ADD_TODO } from '../actions/todos.actions';

export default(state = [], action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [...state, action.payload];
        default:
            return state;
    }
}