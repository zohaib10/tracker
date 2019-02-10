import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//we need store enhancers(compose()) to tell firebase and firebase packages to add fbConfig
//getFirebase & getFirestore know what to connect to because we have added the config files into our store enhancers
