const LogoutMenu = ({isLoggedIn, login, logout})=>{
	return(
		<div>
		{isLoggedIn ? (<div>You are logged in</div>):(<div>You are not logged in</div>)}
			<button onClick={logout}>Logout</button>
			<button onClick={login}>Login</button>
		</div>
		)
}

export default LogoutMenu;