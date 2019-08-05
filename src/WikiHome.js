
import React from 'react'

import Share from './Share.js';
import './CardText.css'
import './Grid.css'


import CardText from './CardText.js'
import Menu from './Menu.js'

import './css/Whome.css'

export default class WikiHome extends React.Component{

	render(){
		return (

			<div className="home-my ">


	                <div className="row">
	                    <Menu />


												<div className="col-md-6 ">
		                    <CardText />
												</div>

												<div className="col-md-1 "> <br></br> </div>

	                </div>



		    </div>


   );}
}
