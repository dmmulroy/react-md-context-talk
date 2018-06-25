import React from 'react';

import { Consumer as VisbilityFilterConsumer } from '../state/visibilityFilter';
import visbilityFilters from '../constants/visibilityFilters';
import visibilityFilters from '../constants/visibilityFilters';

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

const VisbilityFilters = () => (
  <div>
    <span>Show: </span>
    {Object.values(visbilityFilters).map(visibilityFilter => (
      <VisbilityFilterButton filter={visibilityFilter}>
        {visibilityFilter}
      </VisbilityFilterButton>
    ))}
  </div>
);

export default VisbilityFilters;
