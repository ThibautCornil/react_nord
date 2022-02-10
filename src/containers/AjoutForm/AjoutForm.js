/*----------------------------------------
-----------Import des components----------
----------------------------------------*/

import Bouton from '../../components/Boutons/Bouton';
import Titre from '../../components/Titre/Titre';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { withFormik } from "formik";
import * as Yup from "yup";




const AjoutForm = (props) => {
    return (
        <>
            {/* ----------------------------------------------------------- */}
            {/* Mise en place du formulaire de contact avec la partie caché */}
            {/* ----------------------------------------------------------- */}

            <Titre>Contactez-nous</Titre>
            <div className='container'>
                <div className='row no-gutters justify-content-around'>
                    <div className="card col-md-4 text-center">
                        <div class="card-body">
                            <h5 class="card-title"><Icon icon="entypo:location" color="#18BC9C" width="25" height="25" inline={true} /></h5>
                            <h6 class="card-subtitle mb-2 text-muted">Adresse</h6>
                            <p class="card-text">19 rue Jeanne d'Arc 59190 Hazebrouck</p>
                        </div>
                    </div>
                    <div className="card col-md-4 text-center">
                        <div class="card-body">
                            <h5 class="card-title"><Icon icon="akar-icons:phone" color="#18BC9C" width="25" height="25" /></h5>
                            <h6 class="card-subtitle mb-2 text-muted">Téléphone</h6>
                            <p class="card-text">06.06.06.06.06</p>
                        </div>
                    </div>
                </div>
                <br />
                <form>
                    <div className="form-group">
                        <Icon icon="openmoji:european-name-badge" color="#18BC9C" width="25" height="25" />
                        <label htmlFor="name" className="form-label">Nom <span className='badge rounded-pill bg-success'>(min 5 caractères)</span></label>
                        <input type="texte" className="form-control" id="name" name="nom" onChange={props.handleChange} value={props.values.nom} onBlur={props.handBlur} />
                        {
                            props.touched.nom && props.errors.nom && <span className='text-danger'>{props.errors.nom}</span>
                        }
                    </div>

                    <div className="form-group">
                        <Icon icon="fxemoji:email" color="#18BC9C" width="25" height="25" />
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={props.handleChange} value={props.values.email} onBlur={props.handBlur}
                        />
                        {
                            props.touched.email && props.errors.email && <span className='text-danger'>{props.errors.email}</span>
                        }
                    </div>
                    <div className="form-group">

                        <label htmlFor="message" className="form-label d-block"> <Icon icon="bx:bx-message-detail" color="#18BC9C" width="25" height="25" inline={true} />Message <span className='badge rounded-pill bg-success'>(entre 100 et 200 caractères)</span></label>

                        <textarea id="message" className="form-control" name="message" onChange={props.handleChange} value={props.values.message} onBlur={props.handBlur}>

                        </textarea>
                        {
                            props.touched.message && props.errors.message && <span className='text-danger'>{props.errors.message}</span>
                        }

                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Upload</span>
                            </div>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01" />
                                <label class="custom-file-label" for="inputGroupFile01">Choisir un fichier</label>
                            </div>
                        </div>
                    </div>
                    <Bouton typeBtn="btn-primary" cequejeveux={props.handleSubmit}> <NavLink to="/react_nord/contact" className="nav-link">Valider</NavLink></Bouton>

                </form>
            </div>

        </>
    )
}

/*----------------------------------------
----------Mise en place de Formik---------
----------------------------------------*/



export default withFormik({
    mapPropsToValues: () => ({
        nom: "",
        email: "",
        message: "",
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
            .min(5, "le nom doit avoir au moins 5 caractères")
            .required("Le nom est obligatoire"),
        email: Yup.string()
            .email("L'email n'a pas le bon format")
            .required("Email obligatoire"),
        message: Yup.string()
            .min(100, " le message doit faire plus de 100 caractères")
            .max(200, " le message doit faire moins de 200 caractères")
            .required("message obligatoire"),
    }),
    handleSubmit: () => {
        alert("Message envoyé");
    }
})(AjoutForm);