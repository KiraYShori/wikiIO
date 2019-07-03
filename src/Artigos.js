
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
		CardPadrao: "card  text-white border-primary bg-secondary mb-3 card_width",
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


	            <div id="secao4" className="secao ">
	                <a name="Artigos" id="Artigos"></a>



	       <div id="sl" className="slider card2">


	              	<div id="p0" className="meucard"  onClick={this.active.bind(this, this.state.card0)} >
							<div className={this.state.CardPadrao + this.state.card0}>
								  <div className="card-body">

									    <h3 className="card-title text-center title_font">0AVALIAÇÃO DA APLICABILIDADE DA
											MINERAÇÃO DE DADOS PARA O AUXÍLIO NA
											DETECÇÃO DE INDÍCIOS DE FRAUDES EM
											COMPRAS LICITADAS PELO GOVERNO DE

											MINAS GERAIS
										</h3>

										<br></br>

									    <p className="card-text text_color">
										    Resumo: <br></br>  <br></br>
										    As compras realizadas por órgãos públicos, como é o caso de um governo estadual, passam
											pelo processo de licitação. A licitação é um processo administrativo, isonômico, no qual a
											administração pública seleciona a proposta mais vantajosa, menos onerosa e com melhor
											qualidade possível, para a contratação de um serviço, compra de um produto, locação ou
											alienação. Ela deve ser pública e acessível a qualquer cidadão...
										</p>


										<div className="text-right">


											<a href="http://localhost:3000/artigos/A.pdf" className="btn btn-info btn-lg " download> Leia + </a>

										</div>

										<br></br>

										<div className="card-footer text_color">LUÍS FERNANDO DE QUADROS GUADAGNIN
										</div>

								  </div>


						  	</div>

					</div>








					  <div id="p1" className="meucard"  onClick={this.active.bind(this, this.state.who[1])} >
							<div className={this.state.CardPadrao + this.state.card1}>

								  <div className="card-body">

									    <h3 className="card-title text-center title_font">1 FERRAMENTA PARA PROCESSAMENTO E
											INTEGRAÇÃO DE DADOS GOVERNAMENTAIS
										</h3>

										<br></br>
									    <p className="card-text text_color">
										    Resumo: <br></br>  <br></br>
										    A crescente demanda por transparência levou os governos a disponibilizarem, na Internet,
											dados que são de interesse da sociedade, são os chamados dados governamentais abertos.
											No entanto, para as pessoas interessadas, o acesso a essas bases não é suficiente para
											fazer uso das mesmas, a falta de conhecimento técnico pode ser um empecilho...

										</p>


										<div className="text-right">
											<a href="#" className="btn btn-info btn-lg ">Leia +</a>
										</div>

										<br></br>
										<div className="card-footer text_color">PEDRO MAGALHÃES BERNARDO
										</div>

								  </div>

						  	</div>
					</div>






			  		<div id="p2" className="meucard"  onClick={this.active.bind(this, this.state.who[2])} >
							<div className={this.state.CardPadrao + this.state.card2}>
								<div className="card-body">

								    <h3 className="card-title text-center title_font">2
									    Projeto e avaliação de interface de um
										aplicativo móvel para visualização de dados
									</h3>

									<br></br>
								    <p className="card-text text_color">
									    Resumo: <br></br>  <br></br>
									    Juntamente com a crescente disponibilização de grande volume de dados por
									    parte de
										organizações públicas e sociais nos últimos anos, surgiu a demanda por aplicações que
										viabilizam a manipulação e a extração de conhecimento a partir desses dados por toda a
										população, independente do seu nível de conhecimento técnico. Nesse contexto, diversas
										aplicações foram desenvolvidas visando a visualização de dados...

									</p>


									<div className="text-right">
										<a href="#" className="btn btn-info btn-lg ">Leia +</a>
									</div>

									<br></br>
									<div className="card-footer text_color">Ana Carolina Guimarães
									</div>

								</div>
					 		</div>
				    </div>





			  <div id="p3" className="meucard"  onClick={this.active.bind(this, this.state.who[3])} >
					<div className={this.state.CardPadrao + this.state.card3}>
						<div className="card-body">

						    <h3 className="card-title text-center title_font">3
							    WIKIOLAP ANDROID: UM APLICATIVO
								PARA VISUALIZAÇÃO DE DADOS ABERTOS
							</h3>

							<br></br>
						    <p className="card-text text_color">
								Resumo: <br></br>  <br></br>
								Nos últimos anos, surgiu o fenômeno conhecido por Big Data, a produção de uma grande

								quantidade de dados, sobre os mais diversos tópicos. Paralelamente a isso, dados começa-
								ram a ser disponibilizados de maneira pública, para a livre utilização das pessoas, de modo

								a disseminar informação e conhecimento. Esses dados são chamados de dados abertos.das mesmas, a falta de conhecimento técnico pode ser um empecilho...

							</p>


							<div className="nextRightSecond text-right">
								<a href="#" className="btn btn-info btn-lg ">Leia +</a>
							</div>

							<br></br>
							<div className="card-footer text_color">FELIPE R RODRIGUES MAGALHÃES
							</div>

						</div>


					</div>
				</div>
}



</div>
</div>



		);}
	}
