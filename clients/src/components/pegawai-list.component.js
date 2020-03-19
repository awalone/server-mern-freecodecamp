import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Pegawai = props => (
    <tr>
        <td>{props.pegawai.nip}</td>
        <td>{props.pegawai.nama}</td>
        <td>{props.pegawai.jabatan}</td>
        <td>{props.pegawai.unitKerja}</td>
        <td><Link to={"/edit/"+props.pegawai._id}>Edit</Link> | <a href="#" onClick={() => {props.deletePegawai(props.pegawai._id)}}>Delete</a></td>
    </tr>
)

export default class PegawaiList extends Component {

    constructor(props) {
        super(props);
        this.deletePegawai = this.deletePegawai.bind(this);
        this.state = {dataPegawai: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/pegawai/')
            .then(response => {
                this.setState({ dataPegawai: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePegawai(id) {
        axios.delete('http://localhost:5000/pegawai/'+id)
            .then(response => console.log(response.data));
        this.setState({
            pegawai: this.state.dataPegawai.filter(el => el._id !== id)
        })
    }

    pegawaiList() {
        return this.state.dataPegawai.map(currentPegawai => {
            return <Pegawai pegawai={currentPegawai} deletePegawai={this.deletePegawai} key={currentPegawai._id} />;
        })
    }


    render() {
        return (
            <div>
                <h3>Daftar Pegawai</h3>
                <Link className="btn btn-primary" to="/addpegawai">Create Pegawai</Link><br /><br />
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Nip</th>
                            <th>Nama Pegawai</th>
                            <th>Jabatan</th>
                            <th>Unit Kerja</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.pegawaiList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
