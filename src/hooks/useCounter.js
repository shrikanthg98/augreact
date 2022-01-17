import { useState, useEffect } from "react";

const useCounter = ()=>{
const [count, setCount] = useState(0);
	
	const increase = () => {
		setCount(count + 1);
	};

	const decrease = () => {
		setCount(count - 1);
	};

	const reset = () => {
		setCount(0);
	};

	return [count, increase, decrease, reset];
}

export default useCounter;