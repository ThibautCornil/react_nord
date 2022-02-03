import React,{Component} from 'react';
import Titre from '../../../components/Titre/Titre';
import Bouton from '../../../components/Boutons/Bouton';
import AjoutForm from '../../AjoutForm/AjoutForm';
import { Routes, Route } from 'react-router';
import { NavLink } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <>
                <Titre>Contactez-nous</Titre>
                <div>
                <h2>Adresse :</h2>
                wwwww
                <h2>Téléphone:</h2>
                0606060606
                </div>
                <h2>Vous préfèrez nous écrire?</h2>

            <Bouton typeBtn="btn-danger"> <NavLink to="/contact/form"  className="nav-link">Formulaire de contact</NavLink></Bouton>


            </>
        )
    }
}
export default Contact;