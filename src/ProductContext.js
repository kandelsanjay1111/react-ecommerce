import React from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext=React.createContext();

 class ProductProvider extends React.Component {
 	state={
 		products:storeProducts,
 		productDetail:detailProduct
 	}
	render() {
		return (
			<ProductContext.Provider value={{products:this.state.products}}>
			{this.props.children}
			</ProductContext.Provider>
		)
	}
}

const ProductConsumer=ProductContext.Consumer;

export {ProductConsumer,ProductProvider}
