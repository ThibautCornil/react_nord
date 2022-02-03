import React from "react";

const Horaires = props => {
    let content = props.horaires.map((horaire, index) => { /* on met les valeurs de horaires.map pour parcourir le tableau, on récupère les horaires et les index */
        return <li key={index}>
            {
                horaire.du === horaire.au ? `${horaire.du}` : `Du ${horaire.du} au ${horaire.au}` //Condition si le jour et le meme que le prochain jour alors j'affiche que le premier jour
            }

            - De {horaire.heures[0].de} à {horaire.heures[0].a}
            {
                horaire.heures[1] &&
                <> et de {horaire.heures[1].de} à {horaire.heures[1].a}</>
            }
        </li>
    });
    return (
        <>
            <ul>
                Horaire :
                {content}
            </ul>
        </>
    );

}
export default Horaires;