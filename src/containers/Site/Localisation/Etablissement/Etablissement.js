import React from "react";
import { NavLink } from "react-router-dom";
import Horaires from "./Horaire/Horaire";

const Etablissement = props => {
    return (
        <div>
            <div class="card">
                <div class="card-header">
                    {props.nom} {/* je récupere la propriété que j'ai nommé nom dans localisation.js */}
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        Téléphone : {props.telephone} <br /> {/* je récupere la propriété que j'ai nommé telephone dans localisation.js */} </h5>
                    {props.mail && `Email : ${props.mail}`} <br /> <br /> {/* Si le props mail existe alors on affiche Email : la valeur*/}
                    <p class="card-text">
                        <strong> Adresse : <br /> </strong>
                        {props.adresse[0].lignes[0]} {/* Je ne veux que la première ligne du tableau donc première ligne de adresses et la première ligne */}
                        {props.adresse[0].codePostal} - {props.adresse[0].commune}

                        <br />
                        <br />
                        {props.horaires && <Horaires horaires={props.horaires} />} <br /> {/* Si le props horaire existe alors on affiche les horaires*/}
                        {props.url && <a href={props.url} target="blank" class="btn btn-info">Visiter le site</a>}
                    </p>

                </div>
            </div>
        </div>
    );

}
export default Etablissement;