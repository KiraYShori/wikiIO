import React from 'react'

export default class Share extends React.Component{
	constructor(){
		super();
		this.state = {
			show: "card__social",
			close: "share-toggle share-icon",
		};
	}

	shareIcon(){

		this.setState({
			show: "card__social--active",
			close: "share-toggle share-icon card__social",


		});
	}

	render(){
		return (

			<div>


					<div className={this.state.show}>
	                         
	                        <div className="share-icon facebook fb-xfbml-parse-ignore" data-href="http://www.decom.cefetmg.br/">
								<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.decom.cefetmg.br%2F&amp;src=sdkpreparse" className="share-icon facebook fb-xfbml-parse-ignore">
								<span className="fa fa-facebook"></span>
								</a>
							</div>
	     					
	     					<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button share-icon twitter" data-text="Uma forma colaborativa de processar, analisar e obter informações de dados abertos." data-lang="pt" data-dnt="true" data-show-count="false"><span className="fa fa-twitter"></span></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>                         

                            <a className="share-icon whatsapp" href="#"><span className="fa fa-whatsapp"></span></a>
                    </div>



                        
                        <a id="share" className={this.state.close} href="#" onClick={this.shareIcon.bind(this)}></a>
         		

			 </div>





		);
	}











}

