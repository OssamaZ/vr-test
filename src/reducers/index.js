import { combineReducers } from 'redux';

const empty = (state = "em-fucking-pty", action) => {
  return state;
}

const appReducer = combineReducers({
  empty
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
