/*----------------------------------------
-----------Import des components----------
----------------------------------------*/

import React,{Component} from 'react';
import Accueil from './Accueil/Accueil';
import Contact from './Contact/Contact';
import Localisation from './Localisation/Localisation';
import NavBar from '../../components/UI/NavBar/NavBar';
import { Routes, Route } from 'react-router';
import Erreur from '../../components/Erreur/Erreur';
import Footer from '../../components/Footer/Footer';
import AjoutForm from '../AjoutForm/AjoutForm';



class Site extends Component {
    render() {
        return (
            <>
            <div className="site">
                <NavBar/>
            <div className="container">
                <Routes>
                    {/* Création des systèmes pour acceder a nos pages */}
                <Route path="/react_nord/localisation" element={<Localisation />} />
                <Route path="/react_nord/contact" element={<Contact />} />
                <Route path="/react_nord/" element={<Accueil />} />
                <Route path="*" element={<Erreur />}/>
                <Route path="/react_nord/contact/form" element={<AjoutForm/>}/>
                </Routes>
            </div>
                <div className="minSite"></div>    
            </div>
            
            <Footer/>
                
            </>
        )
    }
}

/*----------------------------------------
------------Export du component-----------
----------------------------------------*/
export default Site;