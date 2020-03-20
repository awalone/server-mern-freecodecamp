import React, { Component } from 'react'

export default class WithoutUseEffect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "awalone"
        };
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    componentDidMount() {
        document.title = this.state.name;
    }

    componentDidUpdate() {
        document.title = this.state.name;
    }

    handleChangeNama(e) {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.name}  onChange={this.handleChangeName} />
            </div>
        )
    }
}
