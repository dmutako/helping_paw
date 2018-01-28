 import React, { Component } from 'react';
 import Listcomponent from './Listcomponent';

 class List extends Component {
 	renderList() {
 		const items = this.props.items.map(item => {
 			return (
 				<li key={item.name}>
 				<Listcomponent name= {item.name} img= {item.url} text= {item.text} />
 				</li>
 			)
 		});
 	return items;
 }

 	render() {
 		return (
 			<ul>
 				{this.renderList()}
 			</ul>
 		);
 	}
 }

 export default List;