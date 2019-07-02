import React from 'react'



import wikiLogo from './imagens/WikiOLAP1.png';
import imgBack from './imagens/backWiki.png';
import balance from './imagens/balance-scale.svg';
import './Projeto.css'

export default class Projeto extends React.Component{
	render(){
		return (
			<div id="" className="secao secao3 ">
                <a name="Projeto" id="Projeto"></a>



                <div className="text-position col-md-8">
                	<h1 className="old-h1"> A WikiOLAP é um projeto criado para facilitar o processamento, análise e obtenção de informações de dados abertos de forma colaborativa. 
                	Deixando mais transparente e claro para a população dados governamentais.
                	</h1>
					
					<div className="row box-position">

					<div className="col-md-3 divcenter">
						<i className="fa fa-globe globe"></i>
						<p id="old-p"> A evolução tecnológica viabilizou um grande aumento na velocidade e quantidade de dados gerados diariamente.
						</p>
					</div>
					
					<div className="col-md-3 divcenter">
						<div className="balance-scale"><br></br>
						</div>
						

						<p id="old-p">
						Visando a transparência ativa junto com a Lei de Acesso à Informação (Lei nº 12527/2011), os dados abertos, disponíveis a qualquer pessoa se encontram em diversos sites de diferentes formas.
					</p>
					</div>

					<div className="col-md-3 divcenter">
						<i className="fa fa-database globe"></i>
					<p id="old-p">
						Apenas disponibilizar esses dados não é o suficiente e para facilitar e eliminar os problemas como formato ou falta de conhecimento técnico. 
					</p>
					</div>
					</div>
					
					<h3 className="old-h3">
						A WikiOLAP propõe de forma colaborativa processar, integrar e permitir a análise desses dados. 
						Contribuindo para usuários de diversas áreas possam processar e analisar favorecendo a expansão dos dados 
						contribuindo para a divulgação e entendimento deles.
					</h3>


                </div>

                <div className="video-position col-md-4">
                <h2 className="titleVideo"> Vídeos Relacionados </h2>
                 <div className="hh2"> WikiOLAP Mobile: 
                 </div>
                 
                 <div>
                 <iframe width="360" height="180" src="https://www.youtube.com/embed/OGebiusMAlU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 </div>
                 
                </div>
            </div>

            );}


}