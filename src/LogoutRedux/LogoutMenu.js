import {useSelector, useDispatch} from "react-redux";

const LogoutMenu = ()=>{

	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state)=>{
		console.log(state);
		return state.isLoggedIn;
	});

	const logout = ()=>{
		dispatch({type:"logout"});
	};

	const login = ()=>{
		dispatch({type:"login"});
	};

	return(
		<div>
		isLoggedIn={isLoggedIn}<br/>
		{isLoggedIn ? (<div>You are logged in</div>):(<div>You are not logged in</div>)}
			<button onClick={logout}>Logout</button>
			<button onClick={login}>Login</button>
		</div>
		)
}

export default LogoutMenu;