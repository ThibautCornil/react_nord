/*----------------------------------------
-----------Import des components----------
----------------------------------------*/
import React from "react";
import Titre from "../Titre/Titre";

const Erreur = props => {
return(
    <div className="alert alert-danger">
        <Titre>THEO 404</Titre>
    </div>
);

}

/*----------------------------------------
------------Export du component-----------
----------------------------------------*/
export default Erreur;