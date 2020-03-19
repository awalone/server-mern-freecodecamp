import React, { Component } from 'react'
import axios from 'axios'
export default class UnitKerjaUpdate extends Component {

    constructor(props) {
        super(props);
        this.onChangeUnitKerja = this.onChangeUnitKerja.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            unitkerja: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/unitkerja/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    unitkerja: response.data.unitkerja
                })
            })
            .catch(function(error) {
                console.log(error);
            })
        
    }

    onChangeUnitKerja(e) {
        this.setState({
            unitkerja: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const unit = {
            unitkerja: this.state.unitkerja
        }

        console.log(unit);

        axios.post('http://localhost:5000/unitkerja/update/' + this.props.match.params.id, unit)
            .then(res => console.log(res.data));

        window.location = '/';
    }


    render() {
        return (
            <div>
                <h2>Edit Unit Kerja</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="UnitKerja">Unit Kerja</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.unitkerja}
                            onChange={this.onChangeUnitKerja}/>
                    </div>
                    <div className="form-group">
                        <input type="submit"
                         className="btn btn-primary"
                         value="Edit Unit Kerja"/>
                    </div>
                </form>
            </div>
        )
    }
}
