import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todoActions'

class Todos extends Component {
  state = {
    searchString: ''
  }
  handleFormChange = (event) => {
    this.setState({ searchString: event.target.value })

  }
  render() {
    const filteredArray = this.props.todos.filter((todo) => {
      return (
        todo.task.includes(this.state.searchString)
      )
    })

    return (
      <div>
        <input onChange={this.handleFormChange}
          value={this.state.searchString} /><button> edit</button>
        <form>
          <input />
        </form>
        <br />
        <ul>
          {filteredArray.map(todo => (
            <li
              key={todo.id}
              onClick={() => this.props.toggleTodo(todo.id)}
            >
              {todo.task}: {todo.completed.toString()}
            </li>
          ))}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggleTodo })(Todos)