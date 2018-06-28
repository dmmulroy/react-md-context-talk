import React from "react";

import TodoProvider from "./todos";
import VisibilityFilterProvider from "./visibilityFilter";
import composeProviders from "./composeProviders";

const Provider = ({ children }) =>
  composeProviders([<TodoProvider />, <VisibilityFilterProvider />, children]);

export default Provider;
