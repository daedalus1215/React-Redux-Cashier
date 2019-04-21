import React, { Component } from 'react';
import GroceryItems from './components/GroceryItems/GroceryItems';
import GroceryCart from './components/GroceryCart/GroceryCart';
import './style.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
        this.addToCart = this.addToCart.bind(this);
        this.deleteFromCart = this.deleteFromCart.bind(this);
    }


    addToCart(item) {
        const cart = [...this.state.cart, item];
        this.setState({cart});
    }

    deleteFromCart(index) {
        const cart = [...this.state.cart];
        cart.splice(index, 1);
        this.setState({cart});
    }

    render() {
        return (
            <div id="app-container">
                <h1>Grocery Cart</h1>
                <p>Here's is my react App default component</p>
                <div id="grocery-container">
                    <GroceryItems addToCart={this.addToCart}/>
                    <GroceryCart items={this.state.cart} removeFromCart={this.deleteFromCart}/>
                </div>
            </div>
        );
    }
}