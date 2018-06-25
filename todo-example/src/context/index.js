import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import Provider from "./state";

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
