/*----------------------------------------
-----------Import des components----------
----------------------------------------*/
import React, { Component } from 'react';
import axios from "axios";
import Titre from '../../../components/Titre/Titre';
import Bouton from '../../../components/Boutons/Bouton';
import Etablissement from './Etablissement/Etablissement';

class Localisation extends Component {

    state = {
        recherche: '',
        numeroPageActuel:1,
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
        //PAGINATION
        let pagination = [];
        let listeEtablissement ="";
        if (this.state.recherche){
            let fin = this.state.recherche.length / 10;
            if (this.state.recherche.length % 10 !== 0) fin++;
            for (let i = 1; i <= fin; i++) {
                pagination.push(
                    <Bouton
                        key={i}
                        typeBtn="btn-secondary"
                        cequejeveux={() => this.setState({numeroPageActuel: i})}
                        >{i}</Bouton>
                );
                const debutListe = (this.state.numeroPageActuel -1 ) * 10;
                const finListe =this.state.numeroPageActuel *10;
                const listeReduite = this.state.recherche.slice(debutListe, finListe);
                listeEtablissement = listeReduite.map(etablissement =>  {
                    return (
                        <div key={etablissement.properties.id} className="col-12 col-md-6">
                            <Etablissement
                                id={etablissement.properties.id}
                                nom={etablissement.properties.nom}
                                telephone={etablissement.properties.telephone}
                                adresses={etablissement.properties.adresses}
                                horaires={etablissement.properties.horaires}
                                url={etablissement.properties.url}
                            />
                        </div>
                    )
                })
            }                
            }


        return (
            <>
                <Titre>Rechercher un établissement</Titre>
                <Bouton typeBtn="btn-info" cequejeveux={() => this.rechercheEtablissement("mairie")}>Mairie</Bouton>
                <Bouton typeBtn="btn-info" cequejeveux={() => this.rechercheEtablissement("commissariat_police")} >Commissariat de Police</Bouton>
                <Bouton typeBtn="btn-info" cequejeveux={() => this.rechercheEtablissement("pole_emploi")} >Pôle emploi</Bouton>
                <Bouton typeBtn="btn-info" cequejeveux={() => this.rechercheEtablissement("prefecture")} >Préfécture</Bouton>

                <div className='row no-gutters'>{listeEtablissement}</div>
                    <div>{pagination}</div>
                
            </>
        )
    }
}
/*----------------------------------------
------------Export du component-----------
----------------------------------------*/
export default Localisation;