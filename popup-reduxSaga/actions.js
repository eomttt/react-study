export const SHOW_POPUP = 'SHOW_POPUP';
export const SET_POPUP = 'SET_POPUP';
export const HIDE_POPUP = 'HIDE_POPUP';

export const showPopup = () => {
  return {
    type: SHOW_POPUP
  };
};

export const setPopup = (text) => {
  return {
    type: SET_POPUP,
    payload: {
      text: text
    }
  }
}

export const hidePopup = () => {
  return {
    type: HIDE_POPUP
  };
};
