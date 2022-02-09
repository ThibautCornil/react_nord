import React,{Component} from 'react';
import Titre from '../../../components/Titre/Titre';
import Bouton from '../../../components/Boutons/Bouton';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <>
                <Titre>Contactez-nous</Titre>
            <div className='container'>

            <div className="form-group">
            <Icon icon="entypo:location" color="#27ae60" width="25" height="25" inline={true} />
                        <label htmlFor="adresse" className="form-label m-2">Adresse :</label>
                        <input type="texte" className="form-control" id="adresse" />
                </div>
                <div className="form-group">
                <Icon icon="akar-icons:phone" color="#27ae60" width="25" height="25"  />
                        <label htmlFor="telephone" className="form-label">Téléphone :</label>
                        <input type="number" className="form-control" id="telephone" />
                </div>
                
                <p>Vous préfèrez nous écrire?</p>

            <Bouton typeBtn="btn-light"> <NavLink to="/react_nord/contact/form" className='Color:white'>Formulaire de contact</NavLink></Bouton>
            </div>


            </>
        )
    }
}
export default Contact;