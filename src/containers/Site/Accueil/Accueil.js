import React from "react";
import Titre from "../../../components/Titre/Titre";
import chateau from "../../../asset/images/chateau.jpg"

const Accueil = props => {
return(
    <>
    <Titre>Bienvenue sur le Site de l'Ariège</Titre>
    <p>Le site vous aidant a trouver les établissements publics de l'Ariège</p>
    <img src={chateau} alt="chateau" width="100%" />
    </>
);

}
export default Accueil;