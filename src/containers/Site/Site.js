import React,{Component} from 'react';
import Accueil from './Accueil/Accueil';
import Contact from './Contact/Contact';
import Localisation from './Localisation/Localisation';
import NavBar from '../../components/UI/NavBar/NavBar';
import { Routes, Route } from 'react-router';
import Erreur from '../../components/Erreur/Erreur';
import Footer from '../../components/Footer/Footer';
import classes from '../../App.css';
import AjoutForm from '../AjoutForm/AjoutForm';


class Site extends Component {
    render() {
        return (
            <>
            <div className="site">
                <NavBar/>
                <Routes>
                <Route path="/react_nord/localisation" element={<Localisation />} />
                <Route path="/react_nord/contact" element={<Contact />} />
                <Route path="/react_nord/" element={<Accueil />} />
                <Route path="*" element={<Erreur />}/>
                <Route path="/react_nord/contact/form" element={<AjoutForm/>}/>
                </Routes>
                <div className="minSite"></div>
            </div>
                <Footer/>
            </>
        )
    }
}
export default Site;