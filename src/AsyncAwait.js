import axios from "axios";

const AsyncAwait = () => {
	async function fetchDetails() {
		try {
			const response = await axios.get("/todo");
			console.log(response);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div>
			<button onClick={fetchDetails}>Fetch Todos</button>
		</div>
	);
};

export default AsyncAwait;
