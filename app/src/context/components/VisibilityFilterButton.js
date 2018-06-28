import React from 'react';

import { Consumer as VisbilityFilterConsumer } from '../state/visibilityFilter';

const VisbilityFilterButton = ({ filter, children }) => (
  <VisbilityFilterConsumer>
    {({ visibilityFilter, setVisibilityFilter }) => (
      <button
        onClick={() => setVisibilityFilter(filter)}
        disabled={filter === visibilityFilter}
        style={{
          marginLeft: '4px'
        }}
      >
        {children}
      </button>
    )}
  </VisbilityFilterConsumer>
);
export default VisbilityFilterButton;
