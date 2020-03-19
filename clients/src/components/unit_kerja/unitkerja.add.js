import React, { Component } from 'react'
import axios from 'axios'

export default class UnitKerjaAdd extends Component {

    constructor(props) {
        super(props);
        this.onChangeUnitKerja = this.onChangeUnitKerja.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            unitkerja: ''
        }
    }

    onChangeUnitKerja(e) {
        this.setState({
            unitkerja: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const unit = {
            unitkerja: this.state.unitkerja,
        };
        axios.post('http://localhost:5000/unitkerja/add', unit)
            .then(res => console.log(res.data));

        console.log(unit);
        this.setState({
            unitkerja: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create Unit Kerja</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="UnitKerja">Unit Kerja</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.unitkerja}
                            onChange={this.onChangeUnitKerja}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Unit Kerja" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
