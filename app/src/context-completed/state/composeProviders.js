import React from "react";

const composeProviders = ([Provider, ...providers]) =>
  Provider
    ? React.cloneElement(Provider, {}, composeProviders(providers))
    : null;

export default composeProviders;
