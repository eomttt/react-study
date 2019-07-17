import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as action from '../actions';

class Td extends PureComponent {
  onClickCell = () => {
    const { rowIndex, columnIndex, turn, columnData } = this.props;
    const { clickCell, changeTurn } = this.props;

    if (columnData === '') {
      clickCell(rowIndex, columnIndex, turn);
      changeTurn();
    } else {
      alert ('Already set.');
    }
  }

  render() {
    const { columnData } = this.props;

    return (
      <>
        <td onClick={this.onClickCell}>{columnData}</td>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  tableData: state.tableData,
  turn: state.turn,
  rowIndex: ownProps.rowIndex,
  columnIndex: ownProps.columnIndex,
  columnData: ownProps.columnData
});

const mapDispatchToProps = (dispatch) => ({
  clickCell: (rowIndex, columnIndex, turn) => dispatch(action.clickCell(rowIndex, columnIndex, turn)),
  changeTurn: () => dispatch(action.changeTurn())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Td);