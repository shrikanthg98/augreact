import { useState, useMemo } from "react";

const MemoTestWithUseMemo = () => {
	const [increment, setIncrement] = useState(0);
	const [initialVal, setInitialVal] = useState(1);

	const complexCalculation = (mul = 1) => {
		console.log(`initial sum value = ${mul}`);

		for (let i = 1; i < 4; i++) {
			mul *= i;
			console.log("ran");
		}

		console.log(`mul calculated again = ${mul}`);
		return mul;
	};

	const increase = () => {
		setIncrement(increment + 1);
	};

	const increaseInitialVal = () => {
		setInitialVal(initialVal + 1);
	};

	const optimizedComplexCalculation = useMemo(
		() => complexCalculation(initialVal),
		[initialVal]
	);

	return (
		<div>
			<button onClick={increase}>Increment</button>
			<div>{increment}</div>
			<br />
			<button onClick={increaseInitialVal}>Increase initial val</button>
			<div>initial val = {initialVal}</div>
			<br />
			<p>value = {optimizedComplexCalculation}</p>
		</div>
	);
};

export default MemoTestWithUseMemo;
