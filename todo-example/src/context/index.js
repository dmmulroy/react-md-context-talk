import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import Provider from './state';

const renderApp = () =>
  render(
    <Provider>
      <App />
    </Provider>,
    document.getElementById('root')
  );

export default renderApp;
