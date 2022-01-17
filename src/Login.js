import "./App.css";
import {useParams} from "react-router-dom";

function Login() {

	const { msg, response } = useParams();

	function doLogin() {
		alert("I am logging in");
	}
	return (
		<div className = "Login">
		<h2>{msg}</h2>
		<h3>{response}</h3>
			<input type="text" name="username" />
			<input type="password" name="password" /><br/>
			<button onClick={doLogin}> login </button>
		</div>
	);
}

export default Login;
