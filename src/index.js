import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import "../src/index.scss";
import App from "./App";

//ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.hydrate(<App />, document.getElementById("root"));
