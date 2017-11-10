import React, {Component} from 'react';
import { connect } from 'react-redux';
import { next } from '../actions';

class NextButton extends Component {
  render (){
    return (
    <button onClick={this.props.next} className="NextButton">
   Next
</button>

    );
  }
}

const mapActionsToProps = {
  next: next
};

export default connect(null, mapActionsToProps)(NextButton);
