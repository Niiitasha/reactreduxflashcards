import React, { Component } from 'react';
import { next } from '../actions';
import { connect } from 'react-redux';


class NextButton extends Component {
    render() {
        return (
            <button onClick={this.props.next} disabled={this.props.disabled} className="NextButton">
                Next Card
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {
        disabled: state.currentCardIndex >= state.cards.length - 1
    }
}

const mapActionsToProps = {
    next: next
};

export default connect(mapStateToProps, mapActionsToProps)(NextButton);
