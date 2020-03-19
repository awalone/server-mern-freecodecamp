import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/navbar.component'
import ExercisesList from './components/exercises-list.component'
import EditExercise from './components/edit-exercises.component'
import CreateExercise from './components/create-exercise.component'
import CreateUser from './components/create-user.component'

// untuk komponen pegawai
import PegawaiAdd from './components/pegawai-create.component'
import PegawaiEdit from './components/pegawai-edit.component'
import PegawaiList from './components/pegawai-list.component'

// untuk komponen unitkerja
import UnitKerjaAdd from './components/unit_kerja/unitkerja.add'
import UnitKerjaList from './components/unit_kerja/unitkerja'
import UnitKerjaUpdate from './components/unit_kerja/unitkerja.update'


import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (

    <Router>
      <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/pegawai" component={PegawaiList} />
      <Route path="/addpegawai" component={PegawaiAdd} />
      <Route path="/editpegawai" component={PegawaiEdit} />
      <Route path="/unitkerja" component={UnitKerjaList} />
      <Route path="/unitkerjaAdd" component={UnitKerjaAdd} />
      <Route path="/unitkerjaUpdate" component={UnitKerjaUpdate} />
      </div>
      
    </Router>
  );
}

export default App;
