import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

const Navwrapper=styled.nav`
background:var(--mainBlue);
.nav-link{
	color:var(--mainWhite)!important;
	font-size:1.3rem;
	text-transform:capitalize;

}
`;
export default class Navbar extends React.Component{
	render(){
		return(
			<>
			<Navwrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 ">
				<Link to="/">
					<img src={logo} className="navbar-brand" style={{width:"60px"}} alt="logo"/>
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ms-5">
					<Link to="/" className="nav-link">Products </Link>
					</li>
				</ul>
				<Link to="/cart" className="ms-auto">
				<ButtonContainer>
				<span className="ms-2">
				<i className="fas fa-cart-plus"></i>My cart
				</span>
				</ButtonContainer>
				</Link>
			</Navwrapper>
			</>
			);
	}

}

