import React from "react";
import Profile from "./Profile";
import Comment from "./Comment";
import CompanyContext from "./companycontext";

const Blog = () => {
	const companyOb = {
		name: "Zenrays",
		city: "Bengaluru",
	};

	return (
		<div style={{paddingLeft:"20px"}}>
			<CompanyContext.Provider value={companyOb}>
				<Profile />
				<Comment />
			</CompanyContext.Provider>
		</div>
	);
};
export default Blog;
