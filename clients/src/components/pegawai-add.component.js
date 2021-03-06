import React, { Component } from 'react'
import axios from 'axios'
export default class CreatePegawai extends Component {
    constructor(props) {
        super(props);

        this.onChangeNama = this.onChangeNama.bind(this);
        this.onChangeNip  = this.onChangeNip.bind(this);
        this.onChangeJabatan = this.onChangeJabatan.bind(this);
        this.onChangeUnitKerja = this.onChangeUnitKerja.bind(this);
        this.onChangeKeterangan = this.onChangeKeterangan.bind(this);

      

        this.state = {
            nama: '',
            nip: '',
            jabatan: '',
            unit_kerja: '',
            keterangan: ''
        }
    }

    onChangeNama(e) {
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
            unit_kerja: e.target.value
        });
    }

    onChangeKeterangan(e) {
        this.setState({
            keterangan: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        // const pegawai = {
        //     nama: this.state.nama,
        //     nip: this.state.nip,
        //     jabatan: this.state.jabatan,
        //     unit_kerja: this.state.unit_kerja,
        //     keterangan: this.state.keterangan
        // }

        e.preventDefault();
        const pegawai = {
            nama: '',
            nip: this.state.nip,
            jabatan: this.state.jabatan,
            unit_kerja: this.state.unit_kerja,
            keterangan: this.state.keterangan
        }


        console.log(pegawai);
        // axios.post('http://localhost:5000/pegawai/add', pegawai)
        //     .then(res => console.log(res.data));
        // window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Tambah Pegawai</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="Nama">Nama Pegawai</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.nama}
                            onChange={this.onChangeNama}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Nip">Nip</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.nip}
                            onChange={this.onChangeNip}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Jabatan">Jabatan</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.jabatan}
                            onChange={this.onChangeJabatan}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="UnitKerja">Unit Kerja</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.unit_kerja}
                            onChange={this.onChangeUnitKerja}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Keterangan">Keterangan</label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.keterangan}
                            onChange={this.onChangeKeterangan}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Input Pegawai" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
