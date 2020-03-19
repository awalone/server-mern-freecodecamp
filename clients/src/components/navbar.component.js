import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExcerTracker</Link>
                <div className="collpase navbar-collapse">
                
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link className="nav-link" to="/">Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link" to="/create">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link" to="/user">Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link" to="/addpegawai">Create Pegawai</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link" to="/pegawai">Daftar Pegawai</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link" to="/unitkerja">Daftar Unit Kerja</Link>
                        </li>
                    </ul>
                </div>
            </nav>



        )
    }
}
