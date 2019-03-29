import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import "./index.css";
import { store } from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import { routes } from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
