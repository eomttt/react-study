import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../actions';

import Table from './Table';

class TicTacToe extends Component {

  componentDidUpdate(prevProps, prevState) {
    const { recentCell, tableData } = this.props;
    const { setWinner, resetGame, changeTurn } = this.props;

    const row = recentCell[0],
      column = recentCell[1];

    let win = false;

    if (row < 0) {
      return;
    }

    console.log(row);

    if (tableData[row][0] !== '' && tableData[row][0] === tableData[row][1] && tableData[row][1] === tableData[row][2]) {
      win = true;
    }
    if (tableData[0][column] !== '' &&tableData[0][column] === tableData[1][column] && tableData[1][column] === tableData[2][column]) {
      win = true;
    }
    if (tableData[0][0] !== '' && tableData[0][0] === tableData[1][1] && tableData[1][1] === tableData[2][2]) {
      win = true;
    }
    if (tableData[0][2] !== '' && tableData[0][2] === tableData[1][1] && tableData[1][1] === tableData[2][0]) {
      win = true;
    }

    if (win) {
      setWinner();
      resetGame();
    } else {
      let all = true // if all is true, game is draw
      tableData.forEach((row) => {
        row.forEach((column) => {
          if (column !== '') {
            all = false;
          }
        });
      });

      if (all) {
        resetGame();
      } else {
        changeTurn();
      }
    }
  }

  render() {
    const { tableData, winner } = this.props;

    return (
      <>
        <Table tableData={tableData}/>
        {winner}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tableData: state.tableData,
  recentCell: state.recentCell,
  winner: state.winner
});

const mapDispatchToProps = (dispatch) => ({
  setWinner: () => dispatch(action.setWinner()),
  resetGame: () => dispatch(action.resetGame()),
  changeTurn: () => dispatch(action.changeTurn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToe);