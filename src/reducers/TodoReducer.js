const initialState = { todos: ["default todo1", "default todo2"] };

const TodoReducers = (state = initialState, action) => {
	console.log(state);
	console.log(action);
	let newTodos = null;
	switch (action.type) {
		case "todo_add":
			newTodos = [...state.todos, action.todo];
			return { ...state, todos: newTodos };
			break;
		case "todo_delete":
			newTodos = state.todos.filter((val, index) => {
				if (index == action.indexToDelete) {
					return false;
				}
				return true;
			});

			return {
				...state,
				todos: newTodos,
			};
			break;
		case "todo_clear":
			newTodos= [];

			return{
				...state,
				todos: newTodos,
			}
			break;
		default:
			return state;
	}
};

export default TodoReducers;
