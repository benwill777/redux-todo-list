const defaultState = [
    {
        id: 0,
        task: 'Test this Todo Page',
        completed: false
    },
    {
        id: 1,
        task: 'Learn Redux',
        completed: false
    },
    {
        id: 2,
        task: 'Learn React',
        completed: true
    }
]

function todos(state = defaultState, action) {
    switch (action.type) {

        case 'ADD_TODO':
            return [...state, action.todo]
        case 'TOGGLE_TODO':
            const newState = state.map(todo => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return newState
        case 'EDIT_TODO':
            console.log('InEdit to do', action)
            const updatedState = state.map(todo => {
                console.log('Current todo:', todo)
                if (todo.id === action.id) {
                    console.log('Changing todo:', action.task)
                    todo.task = action.task
                }
                return todo
            })
            return updatedState
        default:
            return state
    }
}

export default todos