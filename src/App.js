import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import ReactGA from 'react-ga4';


function App() {
    ReactGA.initialize('8535186584');

   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
