import React, {Component} from 'react';
import { previous } from '../actions';
import { connect } from 'react-redux';


class PreviousButton extends Component {
  render (){
    return (
    <button onClick={this.props.previous} disabled={this.props.disabled} className="PreviousButton">
   Previous Card
</button>

    );
  }
}

const mapActionsToProps = {
  previous: previous
};

export default connect(null, mapActionsToProps)(PreviousButton);
