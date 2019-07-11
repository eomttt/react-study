import React, { PureComponent, Component } from 'react';

// Same with PureComponent
const Ball = React.memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = 'red';
  } else if (number <= 20) {
    background = 'orange';
  } else if (number <= 30) {
    background = 'yellow';
  } else if (number <= 40) {
    background = 'blue';
  } else {
    background = 'green';
  }

  return (
    <div className="ball" style={{ background }}>{number}</div>
  )
});

// class Ball extends PureComponent {

//   getBackgroundColor(number) {
//     let background;
//     if (number <= 10) {
//       background = 'red';
//     } else if (number <= 20) {
//       background = 'orange';
//     } else if (number <= 30) {
//       background = 'yellow';
//     } else if (number <= 40) {
//       background = 'blue';
//     } else {
//       background = 'green';
//     }

//     return background;
//   }

//   render() {
//     const { number } = this.props;

//     return (
//       <>
//         <div className="ball" style={{'backgroundColor': this.getBackgroundColor(number)}}>{number}</div>
//       </>
//     )
//   }
// }

export default Ball;