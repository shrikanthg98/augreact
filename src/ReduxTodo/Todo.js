import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {todoAdd, todoDelete} from "../actions/todo";
const Todo = () => {

	const [todoToAdd, setTodoToAdd] = useState("default todo");
	const todos = useSelector((state)=>state.todos.todos);
	console.log(todos);
	const dispatch = useDispatch();

	const addTodo = () => {
		dispatch(todoAdd(todoToAdd));
		setTodoToAdd("")
	};

	const deleteTodo = (indexToDelete) => {
		dispatch(todoDelete(indexToDelete));
	};

	const clearTodo = () => {
		dispatch({type:"todo_clear"});
	};

	return (
		<div>
			<button onClick={clearTodo}>Clear Todo</button>
			<input type="text" name="todo" value={todoToAdd} onInput={(event)=>setTodoToAdd(event.target.value)}/>
			<button onClick={addTodo}>Add Todo</button>
			<ul>
				{todos.map((val, index) => {
					return (
						<li>
							{val}
							<button type="button" onClick={()=>deleteTodo(index)}>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Todo;
