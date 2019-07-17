export const CLICK_CELL= 'CLICK_CELL';
export const SET_WINNER = 'SET_WINNER';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';

export const clickCell = (rowIndex, columnIndex, turn) => {
  return {
    type: CLICK_CELL,
    rowIndex: rowIndex,
    columnIndex: columnIndex,
    turn: turn
  };
};

export const setWinner = (winner) => {
  return {
    type: SET_WINNER,
    winner: winner
  };
};

export const changeTurn = () => {
  return {
    type: CHANGE_TURN
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME
  };
};