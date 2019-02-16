import showReducer from './showReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  show: showReducer,
  firestore: firestoreReducer
});

export default rootReducer;
