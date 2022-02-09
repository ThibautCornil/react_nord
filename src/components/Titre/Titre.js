/*----------------------------------------
-----------Import des components----------
----------------------------------------*/
import React from "react";
import classes from "./Titre.module.css"

const Titre = props => {
    const monCss = `border border-dark p-2 m-2 bg-warning rounded text-center ${classes.policeTitre}`
    return(
        <h1 className={monCss}>{props.children}</h1>
    );
}
/*----------------------------------------
-----------Export des components----------
----------------------------------------*/
export default Titre;