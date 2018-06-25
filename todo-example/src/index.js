import renderWithRedux from './redux';
import renderWithContext from './context';

if (process.env.REACT_APP_RENDER_TYPE === 'context') {
  renderWithContext();
} else {
  renderWithRedux();
}
