import React from 'react'

import './App.css';
import './Grid.css';
import './BigData.css';

import wikiLogo from './imagens/WikiOLAP.png'


import bdImg from './imagens/bdFundo5.png'

export default class BigData extends React.Component{

	render(){
		return (


		   <div id="secao2" className="secao colorful">
            <a name="BigData" id="BigData"> </a>

           {/*<img src={bdImg}  id="secao2" className="fundoBD" />
					 */}


					 <div className="">
					 		<div className="row rowsize">
									<div className="titleBD ol-sm-12 col-md-12 col-lg-12" >
									Big Data
									</div>
							</div>

					 	 <div className="container row center text-light text-justify text-big">

						 			<div className="col-md-4">
										<p className="circle">
										É um fenômeno ocasionado pelo grande aumento na velocidade,
										volume e variedade de dados que são gerados diariamente.
										</p>

									</div>
									<div className="col-md-4">
									<p>
									Esses dados são produzidos em transações online,
									redes sociais, dispositivos móveis, sensores,
									registros governamentais, entre outros.
									</p>

									</div>
									<div className="col-md-4">


									<p>
									Estruturados ou não estruturados,
									passando geralmente de terabytes.
									São alguns fatores que geram uma dificuldade
									inerente no armazenamento,
									gerenciamento e análise de dados.
									</p>
									</div>

						 </div>


					 </div>




{/*

			<div className="car_position">
				<div id="carouselSite" className="carousel slide " data-ride="carousel">
				    <ol className="carousel-indicators">
				        <li data-target="#carouselSite" data-slide-to="0" className="active"></li>
				        <li data-target="#carouselSite" data-slide-to="1"></li>
				        <li data-target="#carouselSite" data-slide-to="2"></li>
				        <li data-target="#carouselSite" data-slide-to="3"></li>
				    </ol>




				    <div className="carousel-inner">

				        <div className="carousel-item active">

				            <p id='car_item'>

				            	<h1 className="car_text car_t1">
				            	</h1>
				            </p>

				        </div>


				        <div className="carousel-item">

				            <p id='car_item'>
				            	<h1 className="car_text car_t2">

								</h1>
				            </p>
				        </div>

				        <div className="carousel-item">

				            <p id='car_item'>

				            	<h1 className="car_text car_t3">

								</h1>

				            </p>

				        </div>

				        <div className="carousel-item">

				            <p id='car_item'>

				            	<h1 className="car_text car_t4">

				            	Esse fenômeno ficou conhecido como Big Data.

								</h1>

				            </p>

				        </div>

		    		</div>

				      <a className="carousel-control-prev" href="#carouselSite" role="button" data-slide="prev">
				          <span className="carousel-control-prev-icon"></span>
				          <span className="sr-only">Anterior
				          </span>

				       </a>
				       <a className="carousel-control-next" href="#carouselSite" role="button" data-slide="next">
				          <span className="carousel-control-next-icon"></span>
				          <span className="sr-only">Proximo
				          </span>
					   </a>


					  </div>
		</div>
























*/}

	     </div>




     );
 }
}
