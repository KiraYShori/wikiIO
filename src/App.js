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







//Fazer os icones borda vermelha
  

class App extends Component {
  render() {
    return (
        <div>
        
       
            <div className="mygrid">

                < NavBar />
                
                < WikiHome />

                <Projeto />
                
                <DadosAbertos />

                <BigData />

                <Artigos />
               
                <QuemSomos />
        

            </div>

        </div>

    );
  }
}

export default App;
