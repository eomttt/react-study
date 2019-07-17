import React, { PureComponent } from 'react';
import Tr from './Tr';

class Table extends PureComponent {

  render() {
    const { tableData } = this.props;
    return (
      <>
        <table>
          {
            Array(tableData.length).fill().map((tr, i) => {
              return <Tr key={i} rowIndex={i} rowData={tableData[i]}/>
            })
          }
        </table>
      </>
    );
  }
}

export default Table;