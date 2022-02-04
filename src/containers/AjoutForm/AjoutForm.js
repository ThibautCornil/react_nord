import React, { Component } from 'react';
import Bouton from '../../components/Boutons/Bouton';
import Titre from '../../components/Titre/Titre';
import { NavLink } from 'react-router-dom';

class AjoutForm extends Component {
    render() {
        return (
            <>

                <Titre>Contactez-nous</Titre>
                <div className='container'>
                <div>
                <div className="form-group">
                        <label htmlFor="adresse" className="form-label">Adresse :</label>
                        <input type="texte" className="form-control" id="adresse" />
                </div>
                <div className="form-group">
                        <label htmlFor="telephone" className="form-label">Téléphone :</label>
                        <input type="number" className="form-control" id="telephone" />
                    </div>
                </div>
                <br/>
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
                        <label htmlFor="message" className="form-label d-block">Message</label>
                            <textarea id="message"  className="form-control">
                                
                            </textarea>
                    </div>
                    <Bouton typeBtn="btn-primary"> <NavLink to="/react_nord/contact"  className="nav-link">Valider</NavLink></Bouton>
                </form>
                </div>

            </>
        )
    }
}
export default AjoutForm;