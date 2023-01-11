import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import "./index.css";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./redux/reducers/reducers";
const store = createStore(reducers, applyMiddleware(thunk));
console.log(store);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
