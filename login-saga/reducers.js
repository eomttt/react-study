import * as actions from './actions';

const initialState = {};

export default (state=initialState, action) => {
  const { type, payload } = action;

  switch(type) {
    case actions.LOGIN_SUCCESS:
      return state;
    case actions.LOGIN_FAILURE:
      return state;
    default:
      return state;
  }
}