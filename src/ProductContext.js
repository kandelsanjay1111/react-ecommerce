import React from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext=React.createContext();

 class ProductProvider extends React.Component {
 	state={
 		products:storeProducts,
 		productDetail:{}
 	}

 	addToCart=(id)=>{
 		alert(id);
 	}

 	getProduct=(id)=>{
 		const product=this.state.products.filter((product)=> product.id===id)
 		this.setState({productDetail:product[0]},()=>{
 			console.log(this.state);
 		});
 	}
	render() {
		return (
			<ProductContext.Provider value={
				{products:this.state.products,
				product:this.state.productDetail,
				addToCart:this.addToCart,
				getProduct:this.getProduct
			}}>
			{this.props.children}
			</ProductContext.Provider>
		)
	}
}

const ProductConsumer=ProductContext.Consumer;

export {ProductConsumer,ProductProvider}
