import CompanyContext from "./companycontext";
import { useContext } from "react";

const Comment = () => {
	const companyOb = useContext(CompanyContext);
	return (
		<div>
			<h2>This is Comment component</h2>
			Company Name: {companyOb.name}
			<br />
			Company City: {companyOb.city}
			<br />
		</div>
	);
};
export default Comment;
