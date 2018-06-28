import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

const renderApp = () => render(<App />, document.getElementById('root'));

export default renderApp;
