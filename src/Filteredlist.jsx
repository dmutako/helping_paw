import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class Filteredlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: "all",
			coat: "all",
			color: "all"
		};
	}	
	
	onSearch = (event) => {
		this.setState({search: event.target.value.trim().toLowerCase()});
	}

	filterItemType = (item) => {
		if(this.state.type == "all"){
          	return item.name.toLowerCase().search(this.state.search) !== -1 && (item.region === this.state.region);
        } 
        else if (item.type.toLowerCase() == this.state.type){
        	return item.name.toLowerCase().search(this.state.search) !== -1;
        }
        else if (item.coat.toLowerCase() == this.state.coat){
        	return item.name.toLowerCase().search(this.state.search) !== -1;
        }
	}

	dropButtonHandlerType = (event) => {
		this.setState({
			type: event,
			coat: event
		});
	}

	// filterItemCoat = (item) => {
	// 	if(this.state.type == "all"){
 //          	return item.name.toLowerCase().search(this.state.search) !== -1 && (item.region === this.state.region);
 //        } 
 //        else if (item.coat.toLowerCase() == this.state.coat){
 //        	return item.name.toLowerCase().search(this.state.search) !== -1;
 //        }
	// }

	dropButtonHandlerCoat = (event) => {
		this.setState({
			type: event,
			coat: event
		});
	}

	sortColor = (item1, item2) => {
		if (this.state.color == "color") {
			return item1.color.localeCompare(item2.color);
		}
		// else if (this.state.color == "default") {
		// 	return item2.color - item1.color;
		// }
	}

	colorButtonHandler = (event) => {
		this.setState({
			color: "color"
		});
	}

	defaultButtonHandler = (event) => {
		this.setState({
			color: "default"
		})
	}

	processList = () => {
		return this.props.items.filter(this.filterItemType).sort(this.sortColor);
	}


	render() {
		return (
			<div className="filter-list">
					<DropdownButton id="typeDropdown" title={"Type"}>
						<MenuItem eventKey="all" onSelect={this.dropButtonHandlerType}>All</MenuItem>
						<MenuItem eventKey="pupper" onSelect={this.dropButtonHandlerType}>Pupper</MenuItem>
						<MenuItem eventKey="doggo" onSelect={this.dropButtonHandlerType}>Doggo</MenuItem>
						<MenuItem eventKey="woofer" onSelect={this.dropButtonHandlerType}>Woofer</MenuItem>
						<MenuItem eventKey="boofer" onSelect={this.dropButtonHandlerType}>Boofer</MenuItem>
					</DropdownButton>

					<DropdownButton id="typeDropdown" title={"Coat"}>
						<MenuItem eventKey="all" onSelect={this.dropButtonHandlerCoat}>All</MenuItem>
						<MenuItem eventKey="bald" onSelect={this.dropButtonHandlerCoat}>Bald</MenuItem>
						<MenuItem eventKey="furry" onSelect={this.dropButtonHandlerCoat}>Furry</MenuItem>
						<MenuItem eventKey="hairy" onSelect={this.dropButtonHandlerCoat}>Hairy</MenuItem>
						<MenuItem eventKey="floofy as h*ck" onSelect={this.dropButtonHandlerCoat}>Floofy as h*ck</MenuItem>
					</DropdownButton>

					<button onClick={this.colorButtonHandler}>
						Color
					</button>
					<button onClick={this.defaultButtonHandler}>
						Default
					</button>

					<List items={this.processList()} />
					
						
			</div>
		);
	}

} 
 
export default Filteredlist;













