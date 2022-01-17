import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

store.subscribe(function () {
  //this function will run whenever we change any state variable in redux
  console.log("redux state chnaged");
  
  //this line bwlo will give me the current state.
  console.log(store.getState());

  console.log(`the count value now is ${store.getState().count}`);
});

/*the provider is responsible to make */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    }
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
