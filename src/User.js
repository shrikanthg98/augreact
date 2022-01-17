import { useState, useEffect } from "react";
import axios from "axios";

const User = ()=>{

	const [users, setUsers] = useState([
	{
		id:-1,
		name:"default user",
		location:"default location",

	},]);

	useEffect(()=>{
		axios.get("/user").then(function(res){
			setUsers(res.data);
		});
	},[]);

	return(
		<div>
		{
			users.map(function(val){
				return(
					<div>
					Id:{val.id}<br/>
					Name:{val.name}<br/>
					Location:{val.location}
					</div>
					);
			})
		}
		</div>
		);
};

export default User;