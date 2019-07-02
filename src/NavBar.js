import React from 'react'

import './App.css';
import './NavBar.css';
import wikiLogo from './imagens/WikiOLAP.png';



export default class NavBar extends React.Component{

	render(){
		return (
				
				<nav id="menuHeader" className="navbar navbar-expand-lg navbar-light bg-light" >



				  
				<div className="collapse navbar-collapse" id="NavBar">


				     		<a className="nav-link" href="#">
						  	            <img src={wikiLogo} id="Logo"/>

						 	 </a>

				<ul className="navbar-nav">
				      <li className="nav-item active">



				      </li>
				      <li className="nav-item spaceLi">
				        <a className="nav-link" href="#Projeto"> O Projeto   </a>
				      </li>
				      <li className="nav-item spaceLi">
				        <a className="nav-link" href="#DtAbertos">Dados Abertos   </a>
				      </li>
				      <li className="nav-item spaceLi">
				        <a className="nav-link" href="#BigData">Big Data   </a>
				      </li>

				       <li className="nav-item spaceLi">
				        <a className="nav-link" href="#Artigos">Artigos   </a>
				      </li>
				      <li className="nav-item spaceLi">
				        <a className="nav-link" href="#QSN">Quem Somos Nós   </a>
				      </li>
				     
				    </ul>

				    
				  </div>
				</nav>
		);
		
}
}