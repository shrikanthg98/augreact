import "../App.css";
import {connect} from "react-redux";
import {todoAdd, todoDelete} from "../actions/todo"
import { Component } from "react";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
		console.log("Constructor is called");
	}

	addTodo = (event) => {
		event.preventDefault();

		let newTodos = [...this.state.todos, event.target.todo.value];

		this.setState({ todos: newTodos });
	};

	deleteTodo = (indexToDelete) => {
		let newTodos = this.state.todos.filter((val, index) => {
			if (index === indexToDelete) return false;
			return true;
		});

		this.setState({ todos: newTodos });
	};

	reset = () => {
		this.setState({ todos: [] });
	};

	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log(prevProps);
		console.log(prevState);
		return null;
	}

	render() {
		return (

			<div className="Todo">
			<h2>Todo Redux Class Based </h2>
				<form onSubmit={this.addTodo}>
					<input type="text" name="todo" />
					<button>Add</button>
				</form>
				<button onClick={this.reset}>Clear All</button>
				<SingleTodo
					todos={this.state.todos}
					deleteTodo={this.deleteTodo}
				/>
			</div>
		);
	}
}

class SingleTodo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul>
				{this.props.todos.map((val, index) => {
					return (
						<li>
							{val}{" "}
							<button
								onClick={() => this.props.deleteTodo(index)}
							>
								Delete
							</button>
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapStateToProps = function(state){
	console.log(state);
	return state.todos;
};

const mapDispatchToProps = function(dispatch){
	return{
		todoAdd:(todo)=> dispatch(todoAdd(todo)),
		todoDelete: (indexToDelete)=>dispatch(todoDelete(indexToDelete)),
	};
};

const NewTodo = connect(mapStateToProps, mapDispatchToProps)(Todo);

export default NewTodo;
