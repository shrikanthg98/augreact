import CompanyContext from "./companycontext";
import { useContext } from "react";

const Profile = () => {
	const companyOb = useContext(CompanyContext);
	console.log(companyOb);

	return (
		<div>
			<h2>This is Profile component</h2>
			Company Name: {companyOb.name}
			<br />
			Company City: {companyOb.city}
			<br />
		</div>
	);
};
export default Profile;
