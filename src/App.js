import React, { Component } from 'react';


import NavBar from './NavBar.js'
import DadosAbertos from './DadosAbertos.js'
import BigData from './BigData.js'
import WikiHome from './WikiHome.js'
import Artigos from './Artigos.js'
import QuemSomos from './QuemSomos.js'
import Projeto from './Projeto.js'

import logo from './logo.svg';
import './App.css';
import './Grid.css';
import wikiLogo from './imagens/WikiOLAP.png'




class App extends Component {
  render() {
    return (
        <div>


            <div className="">

             < NavBar />


                < WikiHome />
                {/*      <Projeto />
{*/}
             <BigData />

               <DadosAbertos />

               <Artigos />

                  <QuemSomos />


            </div>

        </div>

    );
  }
}

export default App;
