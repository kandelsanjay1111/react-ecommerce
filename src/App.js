import React from 'react';
import {Switch,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

export default class App extends React.Component{
  
render(){

    return (
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={ProductsList}/>
            <Route path="/details" component={Details}/>
            <Route path="/cart" component={Cart}/>
            <Route component={Default}/>
        </Switch>
        </>
    );
  }
}


