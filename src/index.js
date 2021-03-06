import React from "react";
import ReactDOM from "react-dom";

import Component from "./Component";
import Hook from "./Hook";

import * as serviceWorker from "./serviceWorker";

const app = <Component></Component>;

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
