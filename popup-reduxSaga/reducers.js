import * as actions from './actions';

const initialState = {
  text: ''
}

const reducer = (state=initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.SET_POPUP:
      return {
        ...state,
        text: payload.text
      }
    case actions.HIDE_POPUP:
      return {
        ...state,
        text: ''
      };
    default:
      return state;
  }
};

export default reducer;
