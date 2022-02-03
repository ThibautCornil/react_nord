import React, { Component } from 'react';
import axios from "axios";
import Titre from '../../../components/Titre/Titre';
import Bouton from '../../../components/Boutons/Bouton';
import Etablissement from './Etablissement/Etablissement';

class Localisation extends Component {

    state = {
        recherche: null,
    }

    rechercheEtablissement = (type) => {
        console.log(type);
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/59/${type}`)
            .then(response => {
                console.log(response.data.features)
                this.setState({ recherche: response.data.features })
            })
    }

    render() {
        return (
            <>
                <Titre>Rechercher un établissement</Titre>
                <Bouton typeBtn="btn-info" cequejeveux={() => this.rechercheEtablissement("mairie")}>Mairie</Bouton>
                <Bouton typeBtn="btn-info" cequejeveux={() => this.rechercheEtablissement("commissariat_police")}>Commissariat de Police</Bouton>
                <Bouton typeBtn="btn-info" cequejeveux={() => this.rechercheEtablissement("pole_emploi")}>Pôle emploi</Bouton>
                <Bouton typeBtn="btn-info" cequejeveux={() => this.rechercheEtablissement("prefecture")}>Préfécture</Bouton>

                <div className="row">
                    {this.state.recherche && this.state.recherche.map(etablissement => {
                        return (
                            <div key={etablissement.properties.id} className="col-6">
                                <Etablissement
                                    adresse={etablissement.properties.adresses}
                                    horaires={etablissement.properties.horaires}
                                    telephone={etablissement.properties.telephone}
                                    id={etablissement.properties.id}
                                    nom={etablissement.properties.nom}
                                    mail={etablissement.properties.email}
                                    url={etablissement.properties.url}
                                />
                            </div>

                        )
                    })}
                </div>
            </>
        )
    }
}
export default Localisation;