const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pegawaiSchema = new Schema({
    pegawai_nama: { type: String, required: true},
    pegawai_nip: { type: String, required: true},
    pegawai_jabatan : { type: String},
    pegawai_unit_kerja: { type: String },
    pegawai_keterangan : { type: String }

})