import React from 'react'

import './App.css';
import './Grid.css';
import './QuemSomos.css';

import coutinho from './imagens/quemsomos/flavio-roberto-dos-santos-coutinho.png'
import ismael from './imagens/quemsomos/ismael-santana-silva.png'
import glivia from './imagens/quemsomos/glivia-angelica-rodrigues-barbosa.png'

export default class CardQSN extends React.Component{

constructor(){

	super();
	this.state ={
		position: "",
		photo: "",
		name: "",
		sub: "",
		text: "",
		email: "",

	
	};

}

		render(){
		return(



			<aside className="profile-card">
						  <header>
						    <a target="_blank" href="#">
						      <img src={coutinho} className="hoverZoomLink" />
						    </a>

						    <h1>
						            Flávio Roberto dos Santos Coutinho
						          </h1>

						    <h2>
						            Subcoordenador dos Cursos Técnicos
						          </h2>

						  </header>

						  <div className="profile-bio">

						    <p>
							    M.Sc., UFMG, Brasil, 2012.
								Áreas de atuação:
								Metodologia e Técnicas da Computação
								Desenvolvimento de Jogos Digitais
								Acessibilidade
								Desenvolvimento Web
						    </p>

						  </div>

						  <ul className="profile-social-links">
						    <li>
						      <a target="_blank" href="https://www.facebook.com/creativedonut">
						        <i className="fa fa-facebook"></i>
						      </a>
						    </li>
						    <li>
						      <a target="_blank" href="https://twitter.com/dropyourbass">
						        <i className="fa fa-twitter"></i>
						      </a>
						    </li>
						  </ul>
						</aside>


                










	);}

}