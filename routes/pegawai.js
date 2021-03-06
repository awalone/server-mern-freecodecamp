const router = require('express').Router();
let Pegawai = require('../models/pegawai_model');

router.route('/').get((req, res) => {
    Pegawai.find()
        .then(pegawai => res.json(pegawai))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nama          = req.body.nama;
    const nip           = req.body.nip;
    const jabatan       = req.body.jabatan;
    const unitKerja     = req.body.unitKerja;
    const keterangan    = req.body.keterangan;
    const newPegawai = new Pegawai({
        nama,
        nip,
        jabatan,
        unitKerja,
        keterangan,
    });

    console.log(nama);

    newPegawai.save()
        .then(() => res.json('Pegawai Sudah Ditambahkan'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Pegawai.findById(req.params.id)
        .then(pegawai => res.json(pegawai))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Pegawai.findById(req.params.id)
        .then(pegawai => {
            pegawai.nama        = req.body.nama;

            pegawai.save()
            .then(() => res.json('Pegawai Telah Diubah'))
            .catch(err => res.status(400).json('Error : ' + err));
        })
        .catch( err => res.status(400).json('Error : ' + err));
});

router.route('/:id').delete((req, res) => {
    Pegawai.findByIdAndDelete(req.params.id)
        .then(() => res.json('Pegawai Telah Dihapus'))
        .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;