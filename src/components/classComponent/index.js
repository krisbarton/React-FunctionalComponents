import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: "I am the initial state value for the class component."
        }

        this.updateState = this.updateState.bind(this);
    }

    updateState(event) {
        this.setState({ value: event.target.value })
    };

    render() {
        return (
            <>
                <h2>I am a class component.</h2>
                <input
                    value={this.state.value}
                    type="text"
                    onChange={this.updateState}
                />

                <p>{this.state.value}</p>
            </>
        )
    }

}

export default ClassComponent;
