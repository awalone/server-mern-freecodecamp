import React, { Component } from 'react'

export default class WithoutHook extends Component {

    constructor(props) {
        super(props);
        this.state({
            name = "awalone"
        });
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }




    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.handleChangeName} />
            </div>
        )
    }
}
