import React, { Component } from 'react'
import moduleName from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">ExcerTracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link className="nav-link" to="/">Exercises</Link>
                        </li>
                        <li className="navbar-item" to="/create">
                            <Link className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="nav-link" to="/user">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
