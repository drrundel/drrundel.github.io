import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import ReactGA from 'react-ga4';


function App() {
    ReactGA.initialize('G-RZNQ0E4NWX');

   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
