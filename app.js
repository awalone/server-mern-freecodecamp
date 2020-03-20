const express = require('express')
const app = express()

const db = require('./config/db')
const User = require('./models/User')
app.get("/", (req, res) => res.send("Respon nodeJS Berhasil"));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
// untuk db
db.authenticate().then(() => 
    console.log("Berhasil Terkoneksi dengan database")
);

app.post('/crud', async(req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({
            username, 
            email,
            password
        });
        await newUser.save();
        res.json(newUser);
    } catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});


app.get('/list', async(req, res) => {
    try {
        const getAllUser = await User.findAll({})
        res.json(getAllUser)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.get('/detail/:id', async(req,res) => {
    try {
        const id = req.params.id

        const getUser = await User.findOne({
            where: {id: id}
        });

        res.json(getUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error to Show Detail");
    }
});


app.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await User.destroy({
            where: {id:id}
        })

        await deleteUser;
        res.json("Berhasil dihapus");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error , tidak bisa menghapus");
    }
});


app.put("/update/:id", async(req, res) => {
    try {
        const {username, email, password } = req.body;
        const id = req.params.id;

        const updateUser = await User.update({
            username, 
            email, 
            password
        }, {where: {id:id}});

        await updateUser;

        res.json("berhasil di update");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error , tidak bisa mengupdate")
    }
});



app.listen(4500, () => console.log("Port berjalan di 4500"));