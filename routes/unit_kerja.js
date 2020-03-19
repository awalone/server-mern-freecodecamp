const router = require('express').Router();
let UnitKerja = require('../models/unit_kerja.model');

router.route('/').get((req, res) => {
    UnitKerja.find()
        .then(unitKerja => res.json(unitKerja))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const unit_kerja = req.body.unitkerja;

    const newUnitKerja = new UnitKerja({unit_kerja});

    newUnitKerja.save()
        .then(() => res.json('Unit Kerja ditambahkan'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').get((req, res) => {
    UnitKerja.findById(req.params.id)
        .then(unitKerja => res.json(unitKerja))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    UnitKerja.findById(req.params.id)
        .then(unitKerja => {
            unitKerja.unit_kerja = req.body.unitkerja;
            unitKerja.save()
                .then(() => res.json('Unit Kerja telah diubah'))
                .catch(err => res.status(400).json('Error : ' + err));
        })
        .catch( err => res.status(400).json('Error : ' + err));
});

router.route('/:id').delete((req, res) => {
    UnitKerja.findByIdAndDelete(req.params.id)
        .then(() => res.json('Unit Kerja telah dihapus'))
        .catch(err => res.status(400).json('Error : ' + err));
});


module.exports = router;