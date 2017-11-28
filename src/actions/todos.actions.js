export const ADD_TODO = "ADD_TODO"

export const addTodo = (event, newTodo) => {
    event.preventDefault()
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: newTodo
        })
    }
}