# You might not need Redux; A little context.
> Learn how you can use React 16.3's new Context API instead of Redux (or MobX) to manage your applications state and how to avoid "prop drilling"
## Running The App:

### Redux Version
```bash
npm run start:redux
```

### Context API Version
```bash
npm run start:context
```
NOTE: The context implementation currently points at the `app/src/context`.  This is not fully implemented and is done so purposely with the intent for you to finish implementing it to learn the new API.  If you want to run the app using the Context API anyways, change the code in `app/src/index.js` from:
```javascript
import renderWithRedux from './redux';
import renderWithContext from './context';

if (process.env.REACT_APP_RENDER_TYPE === 'context') {
  renderWithContext();
} else {
  renderWithRedux();
}
```
To:
```javascript
import renderWithRedux from './redux';
import renderWithContext from './context-complete';

if (process.env.REACT_APP_RENDER_TYPE === 'context') {
  renderWithContext();
} else {
  renderWithRedux();
}
```

