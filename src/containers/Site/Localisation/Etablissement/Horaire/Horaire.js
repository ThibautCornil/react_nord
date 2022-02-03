import React from "react";

const Horaires = props => {
    let content = props.horaires.map((horaire, index) => { /* on met les valeurs de horaires.map pour parcourir le tableau, on récupère les horaires et les index */
        return <li key={index}>Du {horaire.du} au {horaire.au} - De {horaire.heures[0].de} à {horaire.heures[0].a}</li>
    }); 
return(
    <>
        <ul>
        Horaire :
        {content}
        </ul>
    </>
);

}
export default Horaires;