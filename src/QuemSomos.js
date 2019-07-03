import React from 'react'

import './App.css';
import './Grid.css';
import './QuemSomos.css';

import coutinho from './imagens/quemsomos/flavio-roberto-dos-santos-coutinho.png'
import ismael from './imagens/quemsomos/ismael-santana-silva.png'
import glivia from './imagens/quemsomos/glivia-angelica-rodrigues-barbosa.png'

export default class QuemSomos extends React.Component{

	constructor(){

		super();
		this.state ={

			classNames: "secao5 secao container2",
			fundo: " a",
			name: ["Flávio Roberto dos Santos Coutinho", "Glívia Angélica Rodrigues Barbosa", "Ismael Santana Silva"],
			img: [coutinho, glivia, ismael],
			data:["M.Sc., UFMG, Brasil, 2012.",  "M.Sc., UFMG, Brasil, 2012.", "  M.Sc., UFMG, Brasil, 2012."],
			ul: {0:["Metodologia e Técnicas da Computação", "Desenvolvimento de Jogos Digitais", "Acessibilidade Desenvolvimento Web"],
					1: ["Interação Humano Computador", "Redes sociais Online","Engenharia de Software", "Mineração de Dados"],
					2:["Aprendizado de máquina", "Mineração de Dados", "Fluxo de dados", "Análise de sentimentos"]
			},
			email:["mailto:fegemo@cefetmg.br", "mailto:glivia@cefetmg.br", "mailto:ismaelsantana@cefetmg.br"],
			lattes:["http://lattes.cnpq.br/6776076167224373", "http://lattes.cnpq.br/8961340779366982", "http://lattes.cnpq.br/8709923026833394"],




		};


}

createList(j){
	let ul= [];
	for (var i = 0; i < this.state.ul[j].length; i++) {
			ul.push(<li>{this.state.ul[j][i]}</li>)
	}

	return ul;
}
createColumn(j){

let column=[];

	column.push(
						<div className="row">

								<header className="col">
									<a target="_blank" href="#">
										<img src={this.state.img[j]} className="qsn" />
									</a>

									<h1> {this.state.name[j]} </h1>

								</header>
								<div className="col minSize">

									<p className="row">
										{this.state.data[j]}
										<br></br>
										<br></br>
									Áreas de atuação:

									<ul className="itens">
										{this.createList(j)}
									</ul>
									</p>

									<p className="row float-right align-bottom" >

									    <ul className="profile-social-links">
									      <li>
									        <a target="_blank" href={this.state.email[0]}>
									          <i className="fa fa-envelope"></i>
									        </a>
									      </li>
									      <li>
									        <a target="_blank" href={this.state.lattes[0]}>
									          Lattes
									        </a>
									      </li>
									    </ul>
									    </p>
								 </div>


							 </div>



	 );

return column;

}

createRow(){
	var total = this.state.name.length;
	let row=[];
	let space = <aside className="col"></aside>;

	for (var j=0; j < total; j=j+2){

				if((total-j) > 1){

					row.push(<div className="row colunm ">
												{space}
												<aside className="profile-card col-md-4">
																	{this.createColumn(j)}
												</aside>{space}
												<aside className="profile-card col-md-4">
																	{this.createColumn(j+1)}
												</aside>{space}
										</div>
					);
				}
				else {
								row.push(<div className="row colunm ">
																{space}
																<aside className="profile-card col-md-4">
																					{this.createColumn(j)}
																</aside>
																{space}
														</div>
									);

				}
			}
 return row;

}

mudarFundo(){
 console.log("To aqui");
	this.setState.fundo = " b";


}
	render(){
		return(
            <div  className={this.state.classNames + this.state.fundo}>
                <a name="QSN" id="QSN"></a>
								<button type="button" class="btn btn-primary align-center text-center btn-lg" onClick={this.mudarFundo()}>Mudar Fundo</button>


								{this.createRow()}
						</div>










	);}

}
