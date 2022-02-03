import React,{Component} from 'react';
import axios from "axios";
import Titre from '../../../components/Titre/Titre';
import Bouton from '../../../components/Boutons/Bouton';

class Localisation extends Component {

    state = {
        recherche:null,
    }

    rechercheEtablissement = (type) => {
                console.log(type);
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/59/${type}`)
            .then(response => {
                console.log(response.data)
                this.setState({recherche:response.data})
            })
    }

    render() {
        return (
            <>
                <Titre>Rechercher un établissement</Titre>
                <Bouton typeBtn="btn-info" cequejeveux = {() => this.rechercheEtablissement("mairie")}>Mairie</Bouton>
                <Bouton typeBtn="btn-info" cequejeveux = {() => this.rechercheEtablissement("commissariat_police")}>Commissariat de Police</Bouton>
                <Bouton typeBtn="btn-info" cequejeveux = {() => this.rechercheEtablissement("pole_emploi")}>Pôle emploi</Bouton>
                <Bouton typeBtn="btn-info" cequejeveux = {() => this.rechercheEtablissement("prefecture")}>Préfécture</Bouton>
            </>
        )
    }
}
export default Localisation;