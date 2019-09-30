import React from 'react'

import './App.css';
import './NavBar.css';
import wikiLogo from './imagens/WikiOLAP.png';



export default class NavBar extends React.Component{
	constructor(){
		super();
		this.state = {
			show: "card__social"
		};
	}

	render(){
		return (
				<div>
				<nav id="menuHeader" className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><a className="nav-item active"><img src={wikiLogo} id="Logo"/></a></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

									<li className="nav-item spaceLi">
											<a className="nav-link" href="#"><span className="sr-only">(Página atual)</span></a>
									</li>
						      <li id="Projeto" className="nav-item spaceLi">
						        <a className="nav-link" href="#Projeto"> O Projeto   </a>
						      </li>
									<li id="BigData" className="nav-item spaceLi">
										<a className="nav-link" href="#BigData">Big Data   </a>
									</li>
						      <li id="DadosAbertos" className="nav-item spaceLi">
						        <a  className="nav-link" href="#DtAbertos">Dados Abertos   </a>
						      </li>


						       <li id="Artigo" className=" nav-item spaceLi">
						        <a  className="nav-link aqui" href="#Artigos">Artigos  </a>
						      </li>
						      <li id="QSN" className="nav-item spaceLi">
						        <a className="nav-link" href="#QSN">Quem Somos Nós   </a>
						      </li>

						    </ul>
						  </div>
						</nav>
				</div>
		);

}
}
