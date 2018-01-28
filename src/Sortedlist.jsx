// import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
// import List from './List';




// class Sortedlist extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			color: "default"
// 		};
// 	}	
	
// 	sortColor = (item1, item2) => {
// 		if (this.state.color == "color") {
// 			return item1.color.localeCompare(item2.color);
// 		}
// 		else {
// 			return item1 - item2;
// 		}
// 		// var colorOrder = [
// 		// 	{color: "light"}, 
// 		// 	{color: "medium"}, 
// 		// 	{color: "dark"}
// 		// ];
// 		// return colorOrder.indexOf(item.color) - colorOrder.indexOf(item1.color);
// 	}

// 	setDefault = (item) => {
// 		if (this.state.color == "default") {
// 			return item.order;
// 		}
// 	}

// 	colorButtonHandler = (event) => {
// 		this.setState({
// 			color: "color"
// 		});
// 	}

// 	defaultButtonHandler = (event) => {
// 		this.setState({
// 			color: "default"
// 		})
// 	}

// 	render() {
// 		return (
// 			<div className="buttons">
// 				<button onClick={this.colorButtonHandler}>
// 						Color
// 				</button>
// 				<button onClick={this.defaultButtonHandler}>
// 						Default
// 				</button>

// 				<List items={this.props.items.sort(this.sortColor)} />

// 			</div>
// 		);
// 	}
// }


// export default Sortedlist;





