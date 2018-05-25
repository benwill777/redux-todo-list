import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'

class TodoForm extends Component {
  state = {
    newTodo: ''

  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button>Add Todo</button>
          <br />

        </form>
      </div >
    )
  }

}

export default connect(null, { addTodo: addTodo })(TodoForm)