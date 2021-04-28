import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "tachyons";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
