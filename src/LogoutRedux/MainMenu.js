import {useSelector} from "react-redux";

const MainMenu = ()=>{
	const isLoggedIn = useSelector((state)=>state.isLoggedIn);

	return(
		<div>
		<a href="#">Home</a><br/>
		<a href="#">About</a><br/>
		{isLoggedIn ? <a href="#">Profile</a> : ""}
		</div>
		);
};

export default MainMenu;