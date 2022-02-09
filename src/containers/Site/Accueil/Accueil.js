/*----------------------------------------
-----------Import des components----------
----------------------------------------*/
import React from "react";
import Titre from "../../../components/Titre/Titre";
import lille from "../../../asset/images/lille.jpg"


/*----------------------------------------
-------------fonction accueil-------------
----------------------------------------*/
const Accueil = props => {
return(
    <>

    <Titre>Bienvenue sur le site du Nord</Titre>
    <p className="text-center">Le site vous aidant a trouver les établissements publics du Nord</p>
    <img src={lille} alt="lille" width="100%" />
    </>
);

}

/*----------------------------------------
------------Export du component-----------
----------------------------------------*/
export default Accueil;