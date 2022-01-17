import store from "./store";
import { useSelector, useDispatch, useStore } from "react-redux";
import { asyncIncrease } from "./actions/counter";
const ReduxCounter = () => {
	const dispatch = useDispatch();

	const count = useSelector((state) => {
		console.log(state);
		return state.count.count;
	});

	const increase = () => {
		dispatch({ type: "increment" });
	};

	const decrease = () => {
		dispatch({ type: "decrement" });
	};

	const increaseAsync = () => {
		dispatch(asyncIncrease());
	};

	return (
		<div>
			<h3>Count = {count}</h3>
			<button onClick={increase}>Increase</button>
			<button onClick={increaseAsync}>Async Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
};

export default ReduxCounter;
