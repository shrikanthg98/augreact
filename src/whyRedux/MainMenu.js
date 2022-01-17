

const MainMenu = ({ isLoggedIn})=>{
	return(
		<div>
		<a href="#">Home</a><br/>
		<a href="#">About</a><br/>
		{isLoggedIn ? <a href="#">Profile</a> : ""}
		</div>
		);
};

export default MainMenu;