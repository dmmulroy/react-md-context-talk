import React from "react";

const { Provider, Consumer } = React.createContext();

class VisibilityFilterProvider extends React.Component {
  state = {
    visibilityFilter: "all",
    setVisibilityFilter: this.setVisibilityFilter
  };

  setVisibilityFilter = visibilityFilter => this.setState({ visibilityFilter });

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default VisibilityFilterProvider;
export {
  Consumer as VisibilityFilterConsumer,
  VisibilityFilterProvider as Provider
};
