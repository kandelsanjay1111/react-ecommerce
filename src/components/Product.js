import React from 'react';

export default class Product extends React.Component {

	render() {
		// console.log(this.props.product);
		return (
			<div>
			<h3>{this.props.product.title}</h3>
			</div>
		);
	}
}
