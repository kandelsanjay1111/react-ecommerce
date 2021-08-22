import React from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../ProductContext';
export default class ProductsList extends React.Component {
	render() {
		return (
			<>
			<div className="py-5">
				<div className="container">
					<Title name="our" title="products"/>
					<div className="row">
					<ProductConsumer>
					{(data)=>{
						return data.products.map((item)=>{
							return <Product key={item.id} product={item}/>
						})

					}}
					</ProductConsumer>
					</div>
				</div>
			</div>
			</>
		);
	}
}
