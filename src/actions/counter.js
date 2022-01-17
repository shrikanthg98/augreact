const asyncIncrease = () => {
	return (dispatch) => {
		return setTimeout(() => {
			dispatch({ type: "asyncincrease" });
		}, 4000);
	};
};

export { asyncIncrease };
