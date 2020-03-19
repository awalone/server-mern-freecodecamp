import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const UnitKerja = props => (
    <tr>
        <td>{props.unitkerja.unit_kerja}</td>
        <td><Link to={"/unitkerjaUpdate/"+props.unitkerja._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteUnitKerja(props.unitkerja._id)}}>Delete</a></td>
    </tr>
);

export default class UnitKerjaList extends Component {

    constructor(props) {
        super(props);
        this.deleteUnitKerja = this.deleteUnitKerja.bind(this);
        this.state = {dataUnitKerja:[]};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/unitkerja/')
            .then(response => {
                this.setState({ dataUnitKerja: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUnitKerja(id) {
        axios.delete('http://localhost:5000/unitkerja/'+id)
            .then(response => console.log(response.data));
        this.setState({
            unitkerja: this.state.dataUnitKerja.filter(el => el._id !== id)
        })
    }

    UnitKerjaList() {
        return this.state.dataUnitKerja.map(currentUnitKerja => {
            return <UnitKerja unitkerja={currentUnitKerja} deleteUnitKerja={this.deleteUnitKerja} key={currentUnitKerja._id} />
        })
    }



    render() {
        return (
            <div>
                <h3>Daftar Unit Kerja</h3>
                <Link className="btn btn-primary" to="/unitkerjaAdd">Create Unit Kerja</Link><br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Unit Kerja</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.UnitKerjaList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
