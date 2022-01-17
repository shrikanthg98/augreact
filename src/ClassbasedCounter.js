import { Component } from "react";
// you cannot use any react hooks for class based components.
//hooks are only used if you use function to create a component.
class ClassbasedComponent extends Component {
	constructor() {
		super();

		this.state = {
			count: 0,
			title: "this is default title",
		};
		//we can use bind or we can use arrow functions, because this is only availabe inside constructor and render.
		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
		this.reset = this.reset.bind(this);
	}

	increase() {
		//to change a state variable we need to use the function setState.

		//setState is asynchronus in nature... if use conosle.log right after setState we will still see the old value.
		this.setState({ count: this.state.count + 1 });

		/*When we realize there is more than one state change,
 then its better to use a function as function also has access to the prevState which is always updated*/
		this.setState(function (prevState) {
			//alert(`Count inside ${prevState.count}`);
			return { count: prevState.count * 2 };
		});

		//alert(`Count outside ${this.state.count}`);
	}

	decrease() {
		this.setState({ count: this.state.count - 1 });
	}

	reset() {
		this.setState({ count: 0 });
	}
	//here we return the HTML inside render
	render() {
		return (
			<div>
				The count = {this.state.count}
				<br />
				<h1>{this.state.title}</h1>
				<br />
				<button onClick={this.increase}>increase</button>
				<button onClick={this.decrease}>decrease</button>
				<button onClick={this.reset}>reset</button>
			</div>
		);
	}
}

export default ClassbasedComponent;
