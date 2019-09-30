
import React from 'react'

import Share from './Share.js';
import './CardText.css'
import './Grid.css'
import './Artigos.css'

import CardText from './CardText.js'
import Menu from './Menu.js'

export default class Artigos extends React.Component{
constructor(){

	super();
	this.state ={
		CardPadrao: "card text-white border-primary bg-secondary mb-3 card_width",
		tccLuis: "https://drive.google.com/file/d/0B4JaNkf0R9JGV1JqWWVEeV9MbGh6dzdXdW9SR1Nsd3QweTcw/view?usp=sharing",

		who: [0, 1, 2, 3, 4],
		card0: " prev",
		card1: " selected",
		card2: " next",
		card3: " nextRightSecond",


		card4:" prevLeftSecond",



	};

}

active(who){



}

newWindow(e){

	window.open(this.state.tccLuis, "janela1");
	return false;

}
	render(){
		return (


	            <div id="secao4" className="home-my ">
	                <a name="Artigos" id="Artigos"></a>



	       <div id="" className=" card2 card-deck">


	              	<div id="p0" className="meucard card"  onClick={this.active.bind(this, this.state.card0)} >
							<div className={this.state.CardPadrao }>
								  <div className="card-body">

									    <h3 className="card-title text-center title_font">AVALIAÇÃO DA APLICABILIDADE DA
											MINERAÇÃO DE DADOS PARA O AUXÍLIO NA
											DETECÇÃO DE INDÍCIOS DE FRAUDES EM
											COMPRAS LICITADAS PELO GOVERNO DE

											MINAS GERAIS
										</h3>

										<br></br>

									    <p className="card-text text_color">
										    Introdução: <br></br>  <br></br>
												A quantidade de informação disponibilizada nos dias de hoje é enorme e vem
												crescendo exponencialmente. Isso torna possível a realização de tarefas que previamente
												não poderiam ser executadas, como o reconhecimento de tendências de negócios, a
												prevenção de doenças, o combate ao crime, entre muitas outras (ECONOMIST, 2010).
										</p>


										<div className="text-right">


											<a href="http://localhost:3000/artigos/avaliacao_aplicacabilidade_da_mineracao_de_dados.pdf" className="btn btn-info btn-lg " download> Leia + </a>

										</div>

										<br></br>

										<div className="card-footer text_color"> {/*Não tenho o lugar onde sairam os artigos*/}
										</div>

								  </div>


						  	</div>

					</div>








					  <div id="p1" className="meucard card"  onClick={this.active.bind(this, this.state.who[1])} >
							<div className={this.state.CardPadrao }>

								  <div className="card-body">

									    <h3 className="card-title text-center title_font"> FERRAMENTA PARA PROCESSAMENTO E
											INTEGRAÇÃO DE DADOS GOVERNAMENTAIS
										</h3>

										<br></br>
									    <p className="card-text text_color">
										    Introdução: <br></br>  <br></br>
												Com a crescente demanda popular por mais transparência das ações governamen-
												tais, novas políticas de publicidade dessas ações vêm sendo implementadas. Segundo Vaz
												et al. (2010) as tecnologias de comunicação e informação (TICs) pemitiram potencializar
												essa transparência, um processo que se deu em três iniciativas, conforme descrito a seguir.

										</p>


										<div className="text-right">
											<a href="http://localhost:3000/artigos/integracao_dados_governamentais-PedroMBernardo.pdf" className="btn btn-info btn-lg " download> Leia + </a>

										</div>

										<br></br>
										<div className="card-footer text_color">
										</div>

								  </div>

						  	</div>
					</div>






			  		<div id="p2" className="meucard card"  onClick={this.active.bind(this, this.state.who[2])} >
							<div className={this.state.CardPadrao }>
								<div className="card-body">

								    <h3 className="card-title text-center title_font">
									    Projeto e avaliação de interface de um
										aplicativo móvel para visualização de dados
									</h3>

									<br></br>
								    <p className="card-text text_color">
									    Intrudução: <br></br>  <br></br>
											Nos últimos anos diversas organizações públicas e sociais têm implementado polí-
											ticas para tornar seus dados disponíveis ao público geral (GRAVES; HANDLER, 2013).
											Denominados dados abertos, esses dados podem ser livremente acessados, processados ou
											compartilhados (JANSSEN; CHARALABIDIS; ZUIDERWIJK, 2013).

									</p>


									<div className="text-right">
										<a href="http://localhost:3000/artigos/Proj_e_Avaliacao_de_interface-AnaCarolinaGuimaraes.pdf" className="btn btn-info btn-lg ">Leia +</a>
									</div>

									<br></br>
									<div className="card-footer text_color">
									</div>

								</div>
					 		</div>
				    </div>





			  <div id="p3" className="meucard card"  onClick={this.active.bind(this, this.state.who[3])} >
					<div className={this.state.CardPadrao }>
						<div className="card-body">

						    <h3 className="card-title text-center title_font">
							    WIKIOLAP ANDROID: UM APLICATIVO
								PARA VISUALIZAÇÃO DE DADOS ABERTOS
							</h3>

							<br></br>
						    <p className="card-text text_color">
								Introdução: <br></br>  <br></br>
								Com o avanço da tecnologia, o processo de produção de dados foi intensificado em diversas
								áreas, gerando o fenômeno conhecido como Big Data (SAGIROGLU; SINANC, 2013).
								Grande parte desses dados é disponibilizada publicamente, o que deu origem ao conceito
								de dados abertos. Um exemplo de dados disponiveis publicamente são os "Dados Abertos
								Governamentais"(BERNARDO et al., 2017).
							</p>


							<div className="nextRightSecond text-right">
								<a href="http://localhost:3000/artigos/WikiOLAP_Android-FelipeMagalhaes.pdf" className="btn btn-info btn-lg ">Leia +</a>
							</div>

							<br></br>
							<div className="card-footer text_color">
							</div>

						</div>


					</div>
				</div>




</div>
</div>



		);}
	}
