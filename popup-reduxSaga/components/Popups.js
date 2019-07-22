import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

class Popup extends Component {
  clickButton = (e) => {
    const { showPopup } = this.props;
    showPopup();
  }

  render() {
    const { text } = this.props;
    return (
      <>
        <button onClick={this.clickButton}>Show popup</button>
        <div>
          {text}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.text
}); // From reducers

const mapDispatchToProps = (dispatch) => ({
  showPopup: () => dispatch(actions.showPopup())
}); // From reducers

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popup); // Connect for use Redu
