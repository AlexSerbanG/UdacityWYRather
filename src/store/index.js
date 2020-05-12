import { combineReducers } from 'redux';

export default combineReducers({
  test: (state = { message: 'TEST' }, action) => ({ ...state }),
});
