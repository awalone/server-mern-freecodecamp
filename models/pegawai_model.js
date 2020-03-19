const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pegawaiSchema = new Schema({
    nama: { type: String, required: true},
    nip: { type: String, required: true},
    jabatan: { type: String, required: true},
    unitKerja: { type: String, required: true},
    keterangan: { type: String}
});

const Pegawai = mongoose.model('daftar_pegawai', pegawaiSchema);
module.exports = Pegawai;
