import React from 'react';

import visibilityFilter from '../constants/visibilityFilters';

const { Provider, Consumer } = React.createContext();

class VisibilityFilterProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibilityFilter: visibilityFilter.SHOW_ALL,
      setVisibilityFilter: this.setVisibilityFilter
    };
  }

  setVisibilityFilter = visibilityFilter => this.setState({ visibilityFilter });

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default VisibilityFilterProvider;
export { Consumer, VisibilityFilterProvider as Provider };
