/*----------------------------------------
-----------Import des components----------
----------------------------------------*/
import React from "react";
import Site from "./containers/Site/Site";
import {BrowserRouter} from "react-router-dom";
import "./App.css"


function App() {
  return (
    //utilisation du systeme de rootage
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}


/*----------------------------------------
------------Export du component-----------
----------------------------------------*/
export default App;
