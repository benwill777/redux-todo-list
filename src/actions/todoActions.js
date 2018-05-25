import uuid from 'uuid'

export function addTodo(task) {
      return {
            type: 'ADD_TODO',
            todo: {
                  id: uuid(),
                  task: task,
                  completed: false
            }
      }
}

export function toggleTodo(id) {
        return {
              type: 'TOGGLE_TODO',
              id
        }
  }

  export function editTodo(task, id) {
        return {
              type: 'EDIT_TODO',
                id: id,
                task: task
        }
  }