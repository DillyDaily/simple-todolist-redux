import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos.actions'

class TodoInput extends Component {
    state = {
        newTodo: ''
    }

  render () {
    console.log('props in todoinput: ', this.props)
    return (
      <form onSubmit={(e) => this.props.addTodo(e, this.state.newTodo)} >
          <p> 
            Todo: 
            <input 
                type="text"
                value={this.state.newTodo}
                onChange={(e) => this.setState({ newTodo : e.target.value })}/>
          </p>
        <button type="submit">Add</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: bindActionCreators(addTodo, dispatch)
    }
}

export default connect(null, mapDispatchToProps) (TodoInput);