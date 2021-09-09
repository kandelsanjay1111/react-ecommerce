import React from 'react';
import {ProductConsumer} from '../ProductContext';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends React.Component {

	render(){
		return(
			<ProductConsumer>
			{(data)=>{
				console.log(data);
				const {id,title,img,company,price,info,inCart}=data.product;
				return (
					<div className="container py-5">
						<div className="row">
							<div className="col-10 mx-aut text-center text-slanted text-blue my-5">
								<h1>{title}</h1>
							</div>
						</div>

						<div className="row">
							<div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
							<img src={img} alt="" className="img-fluid" alt="product"/>
							</div>

							<div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
								<h2>Model: {title}</h2>
								<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
								Made by <span className="text-uppercase">{company}</span>
								</h4>
								<h4 className="text-blue">
								<strong>Price : <span>$</span>{price}</strong>
								</h4>
								<p className="text-capitalize mb-0 mt-3 fw-bold">
								Some info about the product
								</p>
								<p className="text-muted">{info}</p>

								{/* buttons    */}
								<Link to="">
								<ButtonContainer>Back to products</ButtonContainer>
								</Link>

								<ButtonContainer cart onClick={()=>data.addToCart(id)} disabled={inCart ? true : false}>
								{ inCart ? 'In the cart' : 'Add to cart'}
								</ButtonContainer>

							</div>
						</div>
					</div>
					)
			}}
			</ProductConsumer>
			)
	}
}
