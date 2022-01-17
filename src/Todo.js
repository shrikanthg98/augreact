import { useState, useEffect } from "react";
import axios from "axios";
import {useSelector, useDispatch, useStore} from "react-redux";

const Todo = () => {

	const dispatch = useDispatch();
	const count = useSelector((state)=>{
		console.log(state);
		return state.count;
	});

	const increase = ()=>{
		dispatch({type:"increment"});
	};

	const decrease = ()=>{
		dispatch({type:"decrement"});
	};


	const [todos, setTodos] = useState(["cook food", "play hockey"]);
	const [loading, setLoading] = useState(false);
	//when array is empty, then this hook is called when the component is loaded first time.
	//which mean this is equivalent to componentDidMount


	useEffect(function () {
		console.log(
			"I am fired the first time only, equivalent to componentDidMount"
		);
		//this fn will only run when component is removed from DOM
		setLoading(true);
		setTimeout(function(){
			axios.get("/todo").then(function (res) {
			console.log(res.data);
			setTodos(res.data);
		}).catch(function(error){
			console.log(error);//.catch is used to run the function that runs when there is an error
		}).finally(function(){
			setLoading(false);
			alert("Finally the job of sending request to server is done");
			//finally block has a function that will run when the job is done.
			//Job can be successful or can have error regardless the finally will run
			//when all operations to make a req is executed
		});
		},1000);
		return () => {
			console.log("i am equivalent to componentWillUnmount");
		};
	}, []);

	const fetchTodos = ()=>{
			setLoading(true);
		setTimeout(function(){
			axios.get("/todo").then(function (res) {
			console.log(res.data);
			setTodos(res.data);
		}).catch(function(error){
			console.log(error);//.catch is used to run the function that runs when there is an error
		}).finally(function(){
			setLoading(false);
			alert("Finally the job of sending request to server is done");
			//finally block has a function that will run when the job is done.
			//Job can be successful or can have error regardless the finally will run
			//when all operations to make a req is executed
		});
		},1000);
		}

	useEffect(
		function () {
			console.log("Todos are modified");
			//alert(todos);
			console.log(todos);
		},
		[todos]
	);

	function addTodo(event) {
		event.preventDefault();
		console.log(event.target);

		let formOb = event.target;
		console.log(formOb);

		let inputOb = formOb.todo;
		console.log(inputOb);

		//alert(inputOb.value);

		axios.post("/todo",{todo: inputOb.value}).then(function(res){
			alert(res.data);
		}).catch(function(err){
			alert(err);
		});

		fetchTodos();

		// let newTodos = [...todos, inputOb.value];
		// setTodos(newTodos);
	}

	function reset() {
		setTodos([]);
	}

	function deleteTodo(indexToDelete) {
		// let newTodos = [...todos];

		// delete newTodos[indexToDelete];

		// let cleanNewTodos = newTodos.filter((item) => item);
		// console.log(cleanNewTodos);

		// setTodos(cleanNewTodos);

		axios.delete("/todo/"+indexToDelete).then(function(res){
			alert(res.data);
		}).catch(function(err){
			alert(err);
		});

		fetchTodos();
	}

	

	return (
		<div>
		
		{loading ? <img src="rhombus.gif"/>:""}

			<br/><button onClick={reset}>Clear All</button>
			<form onSubmit={addTodo}>
				<input type="text" name="todo" />
				<Todos todos={todos} deleteTodo={deleteTodo} />
				<button>add</button>
			</form>
			Count = {count}<br/>
		<button onClick={increase}>Increase</button>
		<button onClick={decrease}>Decrease</button>
		</div>
	);
};

const Todos = ({ todos, deleteTodo }) => {
	return (
		<ul>
			{todos.map((val, index) => {
				return (
					<SingleTodo
						index={index}
						val={val}
						deleteTodo={deleteTodo}
					/>
				);
			})}
		</ul>
	);
};

const SingleTodo = ({ val, index, deleteTodo }) => {
	return (
		<li>
			{val}{" "}
			<button type="button" onClick={() => deleteTodo(index)}>
				Delete
			</button>
		</li>
	);
};

export default Todo;
