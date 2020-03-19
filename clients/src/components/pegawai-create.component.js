import React, { Component } from 'react'
import axios from 'axios'
export default class PegawaiCreate extends Component {

    constructor(props) {
        super(props);
        this.onChangeNamaPegawai = this.onChangeNamaPegawai.bind(this);
        this.onChangeNip = this.onChangeNip.bind(this);
        this.onChangeJabatan = this.onChangeJabatan.bind(this);
        this.onChangeUnitKerja = this.onChangeUnitKerja.bind(this);
        // this.onChangeUnitKerja = this.onChangeUnitKerja.bind(this);
        this.onChangeKeterangan = this.onChangeKeterangan.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            nama: '',
            nip: '',
            jabatan: '',
            unitKerja: '',
            keterangan: ''
        }
    }

    onChangeNamaPegawai(e) {
        this.setState({
            nama: e.target.value
        });
    }

    onChangeNip(e) {
        this.setState({
            nip: e.target.value
        });
    }

    onChangeJabatan(e) {
        this.setState({
            jabatan: e.target.value
        });
    }

    onChangeUnitKerja(e) {
        this.setState({
            unitKerja: e.target.value
        });
    }

    // onChangeUnitKerja(e) {
    //     this.setState({
    //         unitKerja: e.target.unitKerja
    //     });
    // }

    onChangeKeterangan(e) {
        this.setState({
            keterangan: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const pegawai = {
            nama: this.state.nama,
            nip: this.state.nip,
            jabatan: this.state.jabatan,
            unitKerja: this.state.unitKerja,
            keterangan: this.state.keterangan
        };
        console.log(pegawai);
        axios.post('http://localhost:5000/pegawai/add', pegawai)
            .then(res => console.log(res.data));

        window.location = '/pegawai';
    }

    render() {
        return (
            <div>
                <h3>Create New Pegawai</h3>
                <form onSubmit={this.onSubmit}> 
                    <div className="form-group">
                        <label>Nama Pegawai</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.nama}
                            onChange={this.onChangeNamaPegawai} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Nip">Nip</label>
                        <input type="text" 
                                className="form-control"
                                value={this.state.nip}
                                onChange={this.onChangeNip}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Jabatan">Jabatan</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.jabatan}
                            onChange={this.onChangeJabatan}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Jabatan">Unit Kerja</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.unitKerja}
                            onChange={this.onChangeUnitKerja}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="Keterangan">Keterangan</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.keterangan}
                            onChange={this.onChangeKeterangan} />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Pegawai" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}
