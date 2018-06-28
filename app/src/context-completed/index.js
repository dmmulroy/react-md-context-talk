import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import TodoProvider from './state/todos';
import VisbilityFilterProvider from './state/visibilityFilter';

const renderApp = () =>
  render(
    <TodoProvider>
      <VisbilityFilterProvider>
        <App />
      </VisbilityFilterProvider>
    </TodoProvider>,
    document.getElementById('root')
  );

export default renderApp;
