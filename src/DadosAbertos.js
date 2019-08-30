import React from 'react'

import './App.css'
import './Grid.css'
import './DadosAbertos.css'

import wikiLogo from './imagens/WikiOLAP.png'


import backDA from './imagens/backDA.png'
export default class DadosAbertos extends React.Component{

	render(){
		return (


		     <div id="secao1" className="home-my row">
		            <a name="DtAbertos" id="DtAbertos"></a>

		           <div className="row ">
		           	<div className="col-md-5 ">

				           <h1 className="subT">O que são:</h1>
				           <h1 className="Title"> DADOS ABERTOS</h1>

							<img src={backDA} className="bDA"/>


		           	</div>

		           	<div id="secao1" className="col-md-6 datab">

								<div class="card text-white bg-danger " >
								<div class="card-header"></div>
									    <div class="card-body row column">
												<div className="col-md-1"> </div>
												<i class="fa fa-database fa-3x col-md-2"></i>

									    <p class="card-text  col-md-9 text-justify">	São dados acessíveis a pessoas, empresas e organizações de maneira pública,
												de modo que possam ser utilizados para analisar tendências e padrões, resolver
												problemas complexos e  ajudar na tomada de decisão.
											</p>
											</div>

								</div>
								<div class="card bg-light " >
									    <div class="card-body row column">
												<div className="col-md-1"> </div>
												<i class="fa fa-recycle fa-3x col-md-2"></i>

									    <p class="card-text col-md-9 text-justify">	Deve estar disponíveis publicamente para qualquer pessoa utilizar e serem
											licenciados de maneira a permitir sua reutilização
											</p>
											</div>
								</div>
								<div class="card bg-light " >
											<div class="card-body row column">
												<div className="col-md-1"> </div>
												<i class="fa fa-search fa-3x col-md-2"></i>

											<p class="card-text col-md-9 text-justify"> O Conceito de dados governamentais abertos (DGA)
											surgiu a partir de iniciativas isoladas de viabilizar a transparência das informações governamentais.
											</p>
											</div>
								</div>
								<div class="card bg-light " >
											<div class="card-body row column">
												<div className="col-md-1"> </div>
												<i class="fa fa-check fa-3x col-md-2"></i>

											<p class="card-text col-md-9 text-justify"> Em meio a esse contexto, foi criada a Lei de Acesso à informação (Lei n o 12.527/2011),
												que permite a qualquer cidadão a obtenção de dados e informações de qualquer entidade pública.
											</p>
											</div>
								</div>
								<div class="card bg-light " >
											<div class="card-body row column">
												<div className="col-md-1"> </div>
												<i class="fa fa-upload fa-3x col-md-2"></i>

											<p class="card-text col-md-9 text-justify">
												Além disso, essa lei prevê a chamada “Transparência Ativa”,
												que determina que os órgãos públicos se antecipem aos pedidos e publiquem seus dados na Internet.
											</p>
											</div>
								</div>

								<div class="card bg-light " >
											<div class="card-body row column">
												<div className="col-md-1"> </div>
												<i class="fa fa-globe fa-3x col-md-2"></i>

											<p class="card-text col-md-9 text-justify"> 	 Com isso, foi criado o Portal Brasileiro de Dados Abertos, no qual o governo federal
											disponibiliza dados, em estado bruto, que são de interesse público.
											</p>
											</div>
											<div className="card-footer"></div>
								</div>




					</div>
					</div>

		     </div>
     );
 }
}
