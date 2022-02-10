/*----------------------------------------
-----------Import des components----------
----------------------------------------*/
import React, { Component } from 'react';
import Titre from '../../../components/Titre/Titre';
import Bouton from '../../../components/Boutons/Bouton';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <>
                {/* ----------------------------------------------------------- */}
                {/* Mise en place du formulaire de contact avec la partie caché */}
                {/* ----------------------------------------------------------- */}
                <Titre>Contactez-nous</Titre>
                <div className='container text-center'>
                    <div className='row no-gutters justify-content-around'>
                        <div className="card col-md-4 text-center">
                            <div class="card-body">
                                <h5 class="card-title"><Icon icon="entypo:location" color="#18BC9C" width="25" height="25" inline={true} /></h5>
                                <h6 class="card-subtitle mb-2 text-muted">Adresse</h6>
                                <p class="card-text">19 rue Jeanne d'Arc 59190 Hazebrouck</p>
                            </div>
                        </div>
                        <div className="card col-md-4 text-center">
                            <div class="card-body">
                                <h5 class="card-title"><Icon icon="akar-icons:phone" color="#18BC9C" width="25" height="25" /></h5>
                                <h6 class="card-subtitle mb-2 text-muted">Téléphone</h6>
                                <p class="card-text">06.06.06.06.06</p>
                            </div>
                        </div>
                    </div>

                    <p>Vous préfèrez nous écrire?</p>

                    <Bouton typeBtn="btn-light"> <NavLink to="/react_nord/contact/form" className='Color:white'>Formulaire de contact</NavLink></Bouton>
                </div>


            </>
        )
    }
}

/*----------------------------------------
-----------Export des components----------
----------------------------------------*/
export default Contact;