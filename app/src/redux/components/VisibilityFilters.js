import React from 'react';
import VisibilityFilterButton from './VisibilityFilterButton';
import { VisibilityFilters as visibilityFilters } from '../actions';

const filterDisplayName = {
  SHOW_ALL: 'All',
  SHOW_COMPLETED: 'Completed',
  SHOW_ACTIVE: 'Active'
};

const VisibilityFilters = () => (
  <div>
    <span>Show: </span>
    {Object.values(visibilityFilters).map(visibilityFilter => (
      <VisibilityFilterButton key={visibilityFilter} filter={visibilityFilter}>
        {filterDisplayName[visibilityFilter]}
      </VisibilityFilterButton>
    ))}
  </div>
);

export default VisibilityFilters;
