/*----------------------------------------
-----------Import des components----------
----------------------------------------*/
import React from "react";


/*----------------------------------------
-------------fonction bouton--------------
----------------------------------------*/
const bouton = props => {
    const btnCss = `btn ${props.typeBtn} ${props.large} m-1`
return(
    <>
    <button className={btnCss} onClick={props.cequejeveux}>{props.children}</button>
    </>
);

}

/*----------------------------------------
------------Export du component-----------
----------------------------------------*/
export default bouton;