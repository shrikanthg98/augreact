import React from "react";
import LogoutMenu from "./LogoutMenu";
import MainMenu from "./MainMenu";

const WhyReduxContainer = ()=>{
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	const logout = ()=>{
		setIsLoggedIn(false);
	}

	const login = ()=>{
		setIsLoggedIn(true);
	}

	return(
		<div>
		<MainMenu isLoggedIn={isLoggedIn}/>
		<LogoutMenu login={login} logout={logout} isLoggedIn={isLoggedIn}/>
		</div>
		);
};

export default WhyReduxContainer;