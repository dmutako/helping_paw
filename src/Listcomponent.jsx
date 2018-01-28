import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';



class Listcomponent extends Component {
	render() {
		
	 		return (
	 			// <Listcomponent list= {this.props.items} />
	 			<div>
	 			<h1>{this.props.name}</h1>
	 			<img src={this.props.img}></img>
	 			<p>{this.props.text}</p>
	 			</div>
	 		)
	}
}


export default Listcomponent;





