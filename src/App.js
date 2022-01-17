import { useState } from "react";
import Login from "./Login";
import Counter from "./Counter";
import Todo from "./Todo";
import ClassbasedCounter from "./ClassbasedCounter";
import User from "./User";
import NotFound from "./NotFound";
import City from "./City";
import WhyReduxContainer from "./whyRedux/WhyReduxContainer";
import ReduxCounter from "./ReduxCounter";
import MainMenu from "./LogoutRedux/MainMenu";
import LogoutMenu from "./LogoutRedux/LogoutMenu";
import TodoRedux from "./ReduxTodo/Todo";
import TodoReduxClassBased from "./TodoReduxClassBased/TodoReduxClassBased";
import AsyncAwait from "./AsyncAwait";
import Blog from "./ContextExample/Blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MemoTest from "./MemoTest";
import MemoTestWithUseMemo from "./MemoTestWithUseMemo";
function App() {
  return (
    <div>
      <MemoTestWithUseMemo />
      <MemoTest />
      <Blog />
      <Counter />
      <AsyncAwait />
      <TodoReduxClassBased />
      <a href="/todo">Non SPA Todo</a>
      <br />
      <Router>
        <Link to="/todo">Todo</Link>
        <br />
        <Link to="/login/hello/hi">Login</Link>
        <br />
        <Link to="/wrongurl">Wrong URL</Link>
        <br />
        <Link to="/city/bengaluru">City</Link>
        <br />
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/login/:msg/:response">
            <Login />
          </Route>
          <Route path="/city/:name">
            <City />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
  /*let [show, setShow] = useState(true);
  const changeShow = (event)=>{
    console.log(event.target.value);

    let showValue = parseInt(event.target.value);

    setShow(showValue);
  }

  const [dummyProp, setDummyProp] = useState("Dummy Value");

  const changeDummyProp = (event)=>{
    setDummyProp(event.target.value);
  }

  return (
    <div><br/><br/>
    <User/><br/><br/><br/>
    <input type="text" onChange={changeDummyProp}/>
    <select name="show" onChange={changeShow}>
    <option value={1}>Show</option>
    <option value={0}>Hide</option>
    </select>
      {show ? <Todo dummyProp={dummyProp}/> : "Component is hidden"}
    </div>
  );*/
}

export default App;
