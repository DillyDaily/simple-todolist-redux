import React from 'react'
import { connect } from 'react-redux'

const TodoList = (props) => {
  console.log('props from todoList: ', props)
  let list = props.todos.map((todo, i) => <li key={i}>{todo}</li>)

  return (
      <ul>
        {list}
      </ul>
  )
}

function mapStateToProps(storeState, thisComponentsProps) {
  return {
    todos: storeState.todos
  }
}

export default connect(
  mapStateToProps,
  null
)
   (TodoList);