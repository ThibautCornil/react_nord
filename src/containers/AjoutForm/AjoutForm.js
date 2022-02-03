import React, { Component } from 'react';
import Bouton from '../../components/Boutons/Bouton';
import Titre from '../../components/Titre/Titre';
import { NavLink } from 'react-router-dom';

class AjoutForm extends Component {
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
                <h2 className="text-center text-primary">Affichage du formulaire de contact</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="titre" className="form-label">Nom</label>
                        <input type="texte" className="form-control" id="titre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email"  className="form-control" id="email" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <input type="textarea"  className="form-control" id="message"  />
                    </div>
                    <Bouton typeBtn="btn-primary"> <NavLink to="/contact"  className="nav-link">Valider</NavLink></Bouton>
                </form>

            </>
        )
    }
}
export default AjoutForm;