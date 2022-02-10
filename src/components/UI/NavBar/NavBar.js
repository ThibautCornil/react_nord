/*----------------------------------------
-----------Import des components----------
----------------------------------------*/
import React from "react";
import { NavLink } from "react-router-dom";


/*----------------------------------------
-------------fonction NavBar--------------
----------------------------------------*/
const NavBar = props => {
    return (
        <>
            {/* Création des liens de la navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/react_nord" className="nav-link">Lille MGA</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/react_nord" exact className="nav-link">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/react_nord/localisation" exact className="nav-link">Localisation</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/react_nord/contact" exact className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

}
/*----------------------------------------
-----------Export des components----------
----------------------------------------*/
export default NavBar;