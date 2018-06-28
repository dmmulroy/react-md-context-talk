import React from 'react';

import VisibilityFilterButton from './VisibilityFilterButton';
import visibilityFilters from '../constants/visibilityFilters';

const VisibilityFilters = () => (
  <div>
    <span>Show: </span>
    {Object.values(visibilityFilters).map(visibilityFilter => (
      <VisibilityFilterButton key={visibilityFilter} filter={visibilityFilter}>
        {visibilityFilter}
      </VisibilityFilterButton>
    ))}
  </div>
);

export default VisibilityFilters;
