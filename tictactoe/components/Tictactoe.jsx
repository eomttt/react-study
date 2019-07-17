import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../actions';

import Table from './Table';

class TicTacToe extends Component {

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
  }

  render() {
    const { tableData } = this.props;

    return (
      <>
        <Table tableData={tableData}/>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  tableData: state.tableData
});

const mapDispatchToProps = (dispatch) => ({
  setWinner: () => dispatch(action.setWinner()),
  resetGame: () => dispatch(action.resetGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicTacToe);