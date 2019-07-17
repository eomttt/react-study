import * as actions from './actions';

const initState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1]
}

const reducer = (state=initState, action) => {
  switch (action.type) {
    case actions.CLICK_CELL:
      const tableData = [...state.tableData];
      tableData[action.rowIndex] = [...tableData[action.rowIndex]];
      tableData[action.rowIndex][action.columnIndex] = action.turn;
      return {
        ...state,
        tableData
      };
    case actions.SET_WINNER:
      return state;
    case actions.CHANGE_TURN:
      return {
        ...state,
        turn: state.turn === 'O' ? 'X' : 'O'
      };
    case actions.RESET_GAME:
      return {
        ...state,
        turn: 'O',
        tableData: [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        recentCell: [-1, -1]
      };
    default:
      return state;
  }
};

export default reducer;