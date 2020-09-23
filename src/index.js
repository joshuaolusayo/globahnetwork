import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";

import Homepage from "./Components/Homepage";
import Join from "./Components/Register";
import Authenticate from "./Components/Authentication";
import Dashboard from "./Components/Dashboard";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<div></div>
			<Route exact path="/" component={Homepage}></Route>
			<Route exact path="/join" component={Join}></Route>
			<Route exact path="/auth" component={Authenticate}></Route>
			<Route exact path="/home/dashboard" component={Dashboard}></Route>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
