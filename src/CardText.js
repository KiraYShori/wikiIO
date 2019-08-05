import React from 'react'

import Share from './Share.js';
import './CardText.css'
import './Slider.css'




export default class CardText extends React.Component{

	render(){
		return (


                <div className="card cardText-position wrapperShadow ">


                    <div className="px-md-5 text-justify">

											<br></br><br></br><br></br>
                        <article className="art">
                            <h2>Sabe aqueles dados importantes sobre o seu país que tá ali cada um em um lugar diferente?
                            </h2>
                            <br></br>

                            <h2>
                                Que você gasta horas tentando entender?
                            </h2>
                            <br></br>
                            <h2>
                                A WikiOLAP vai deixar isso mais transparente para você e de um jeito simples.
                            </h2>
                            <br></br>
                            <h2>
                                Vamos processar diferentes formatos e você poderá compartilhar com os amigos e toda a população.
                                E você ainda pode colaborar com a análise dos dados deixando um comentário.
                            </h2>
                            <h2>
                                Uma forma colaborativa de processar, analisar e obter informações de dados abertos.

                            </h2>

                        </article>


                    </div>

                    <div className="card__action">

                        <div className="card__author">
                            <div className="card__author-content">
															<br></br><br></br>
														<h1> Compartilhe essa ideia!</h1>
                            </div>
                        </div>

                        <div className="card__share">

                            <Share />
                        </div>
                    </div>
                </div>


		)};



}
