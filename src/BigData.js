import React from 'react'

import './App.css';
import './Grid.css';
import './BigData.css';

import wikiLogo from './imagens/WikiOLAP.png'


import bdImg from './imagens/bdFundo5.png'

export default class BigData extends React.Component{

	render(){
		return (


		   <div id="" className="secao2 row">
            <a name="BigData" id="BigData"> </a>

							<div className="col-md-3">
							</div>
									<div className="col-md-2 boxbd ">

												<div className="hexagon align-middle align-text-middle">
												<div className="text-center center ">
												BIG DATA
												</div>

												</div>

									</div>
									<div className="row col-md-7 box">
											<div className="hexagon2 ">
													<div className="text-center fSize">
															É um fenômeno ocasionado pelo grande aumento na velocidade,
															volume e variedade de dados que são gerados diariamente.
													</div>
											</div>
											<div className="hexagon2 fPosition">
													<div className="text-center fSize">
															Esses dados são produzidos em transações online,
															redes sociais, dispositivos móveis, sensores,
															registros governamentais, entre outros.
													</div>
											</div>

											<div className="hexagon2 fPosition2">
													<div className="text-center fSize">
														Estruturados ou não estruturados,
														passando geralmente de terabytes.
														Causando dificuldade no armazenamento,
														gerenciamento e análise de dados.
													</div>
											</div>


							</div>

	     </div>




     );
 }
}
