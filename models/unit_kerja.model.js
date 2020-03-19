const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unitkerjaSchema = new Schema({
    unit_kerja : {
        type: String,
        required: true,
        unique: true,
        minlength: 4,
        trim: true
    },
}, {
    timestamps: true
});

const UnitKerja = mongoose.model('unit_kerja', unitkerjaSchema);
module.exports = UnitKerja;