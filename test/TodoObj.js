import "../App.css";
import { useState } from "react";

function TodoObj(){
	let [todo, setTodo] = useState([]);
	
	function addTodo(event){
		event.preventDefault();

		let formOb = event.target;
		let todoVal = formOb.todoInput.value;
		let statusVal = formOb.statusInput.value;

		let newTodos = [...todo,{name:todoVal, status:statusVal}];

		setTodo(newTodos);
	}

 	function clearAll(){
 		setTodo([]);
 	}

 	function deleteTodo(indexToDelete){
 		let newTodos = [...todo];

 		delete newTodos[indexToDelete];

 		let noEmpty = newTodos.filter(item=>item);

 		setTodo(newTodos);

 	}

	return (
		<div className="TodoObj">	
		<button onClick={clearAll}>Clear All</button>
		<form onSubmit={addTodo}>
		<input type="text" name="todoInput" placeholder="Enter a Todo"/>{" "}
		<select name="statusInput">
		<option>select status</option>
		<option>Complete</option>
		<option>Incomplete</option>
		</select>{" "}
		<button >Add</button>
		<ul>{
			todo.map((val,index)=>{
				return <li>{val.name}{" -- "}{val.status} <button onClick={()=>deleteTodo(index)}>Delete</button></li>
			})
		}</ul>
		</form>
		</div>
		);
};

export default TodoObj;