import React, { Component } from 'react'

export default class CreatePegawai extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nama: '',
            nip: '',
            jabatan: '',
            unit_kerja: '',
            keterangan : ''
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
        const pegawai = {
            nama: this.state.username,
            nip: this.state.nip,
            jabatan: this.state.jabatan,
            unit_kerja: this.state.unit_kerja,
            keterangan: this.state.keterangan
        }
        console.log(pegawai);
        Axios.post('http://localhost:5000/pegawai/add', pegawai)
            .then(res => console.log(res.data));
        window.location = '/';
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
