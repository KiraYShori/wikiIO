import React from 'react'

import './App.css';
import './Grid.css';

import wikiLogo from './imagens/WikiOLAP.png'


import backDA from './imagens/backDA.png'
export default class DadosAbertos extends React.Component{

	render(){
		return (


		     <div id="secao1" className="secao">
		            <a name="DtAbertos" id="DtAbertos"></a>

		           <div className="container row">
		           	<div className="col-md-7 ">

				           <h1 className="subT">O que são:</h1>
				           <h1 className="Title"> DADOS ABERTOS</h1>

							<img src={backDA} className="bDA"/>


		           	</div>

		           	<div className="col-md-5 fundoTxt">



								<div class="card">
								  <div class="card-body">
												São dados acessíveis a pessoas, empresas e organizações de maneira pública,
												de modo que possam ser utilizados para analisar tendências e padrões, resolver
												problemas complexos e  ajudar na tomada de decisão.
								  </div>
								 </div>
								 <div class="card">
									<div class="card-body">
											Deve estar disponíveis publicamente para qualquer pessoa utilizar e serem
											licenciados de maneira a permitir sua reutilização

									</div>
								</div>

		            <ul id="txt">


		            <li>
					</li>
					<li> O Conceito de dados governamentais abertos (DGA) surgiu a partir de iniciativas isoladas de viabilizar a transparência das informações governamentais.
					</li>
					<li> Em meio a esse contexto, foi criada a Lei de Acesso à informação (Lei n o 12.527/2011), que permite a qualquer cidadão a obtenção de dados e informações de qualquer entidade pública. Além disso, essa lei prevê a chamada “Transparência Ativa”, que determina que os órgãos públicos se antecipem aos pedidos e publiquem seus dados na Internet.
					</li>

					<li> Com isso, foi criado o Portal Brasileiro de Dados Abertos, no qual o governo federal disponibiliza dados, em estado bruto, que são de interesse público.
					</li>

					</ul>




					</div>
					</div>

		     </div>
     );
 }
}
