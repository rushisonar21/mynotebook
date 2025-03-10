import React,{useContext} from 'react'
import { Link, useLocation } from 'react-router'
import alertContext from '../contexts/alertContext'


function Navbar() {
    let location = useLocation()
    const alert_context = useContext(alertContext)
    const {updateAlert} = alert_context
    const handleLogout = ()=>{
        localStorage.clear();
        updateAlert("Logged out","success")
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/myNotebook">myNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/myNotebook/Home" ? "active" : ""}`} aria-current="page" to="/myNotebook/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/myNotebook/About" ? "active" : ""}`} to="/myNotebook/About">About</Link>
                            </li>
                        </ul>
                    </div>
                {localStorage.getItem('token') ?
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button> :
                <><Link className="btn btn-primary mx-1" to="/myNotebook/Signin" role="button">SignIn</Link><Link className="btn btn-primary mx-1" to="/myNotebook/Login" role="button">LogIn</Link></>
                }
                </div>
            </nav>
        </>
    )
}

export default Navbar
