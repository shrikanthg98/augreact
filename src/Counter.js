import "./App.css";
import useCounter from "./hooks/useCounter"

function Counter() {
	let [count, increase, decrease, reset] = useCounter();
	return (
		<div className="Counter">
			the state varaible value = {count}
			<br />
			<br />
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
			<button onClick={reset}>Rest</button>
			<br />
			the addition of 3 and 5 is {3 + 5}
		</div>
	);
}

export default Counter;
