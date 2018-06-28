import React from 'react';

import VisbilityFilterButton from './VisibilityFilterButton';
import visbilityFilters from '../constants/visibilityFilters';

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
