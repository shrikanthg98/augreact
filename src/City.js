import {} from "react-router-dom";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from "react-router-dom";

const City = () => {
	const { name } = useParams();

	const { url, path } = useRouteMatch();

	console.log(url);
	console.log(path);

	return (
		<div>
			<h2>Welcome to city component</h2>
			<Router>
				<Link to={`${url}/news`}>News</Link>
				<Switch>
					<Route path={`${path}/news`}>
						<CityNews />
					</Route>
				</Switch>
			</Router>
			<h2>{name}</h2>
		</div>
	);
};

const CityNews = () => {
	return (
		<div>
			<h2>City has a huge rainfall</h2>
		</div>
	);
};

export default City;
