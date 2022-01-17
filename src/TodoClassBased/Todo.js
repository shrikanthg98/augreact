import "../App.css";
import { Component } from "react";

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
		console.log("Constructor is called");
	}

	componentDidMount(){
		console.log("componentDidMount is called becasue the component is now loaded")
	}

	componentWillUnmount(){
		console.log("componentWillUnmount is called becasue the component is now removed")
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
			Dummy Prop = <strong>{this.props.dummyProp}</strong>
			<h2>Class Based Todo app</h2>
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

export default Todo;
