import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
  missions: missionReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
