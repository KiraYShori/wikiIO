
import React from 'react'

import Share from './Share.js';
import './CardText.css'
import './Grid.css'


import CardText from './CardText.js'
import Menu from './Menu.js'


export default class WikiHome extends React.Component{

	render(){
		return (

			<div className="wHome">
				<div className="container secao">


	                <div class="row ">
	                    <Menu />
	                    
	                    <CardText />

	                    
	                </div>


		        </div>

		    </div>

   		
   );}
}


