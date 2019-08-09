import * as actions from './actions';

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  loginDatas: []
};

const mockData = {
  id: '123',
  password: '123'
}

export default (state=initialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false
      }
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        loginDatas: [...state.loginDatas, mockData]
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false
      };
    default:
      return state;
  }
}