import React from 'react';

class Tutorial extends React.Component {
  state = {
    tutorial: 'Hello webpack!!!'
  };

  render() {
    console.log('Rendering');
    return (
      <>
        <div>{this.state.tutorial}</div>
      </>
    );
  }
}

export default Tutorial;
