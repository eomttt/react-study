import React, { PureComponent } from 'react';
import Td from './Td';

class Tr extends PureComponent {

  render() {
    const { rowIndex, rowData } = this.props;

    return (
      <>
        <tr>
          {
            Array(rowData.length).fill().map((cd, i) => {
              return <Td key={i} rowIndex={rowIndex} columnIndex={i} columnData={rowData[i]}/>
            })
          }
        </tr>
      </>
    );
  }
}

export default Tr;