import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { stateCounter } from "./store/store";

ReactDOM.render(<App store={stateCounter} />, document.getElementById("root"));
