import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {HashRouter} from "react-router-dom";
import ReactGA from 'react-ga4';


function App() {
    ReactGA.initialize('G-RZNQ0E4NWX');

   return (
      <div>
         <HashRouter>
            <BaseLayout/>
         </HashRouter>
      </div>
   );
}


export default App;
