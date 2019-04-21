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
    }

    render() {
        return (
            <div id="app-container">
                <h1>Grocery Cart</h1>
                <p>Here's is my react App default component</p>
                <div id="grocery-container">
                    <GroceryItems />
                    <GroceryCart items={this.state.cart} />
                </div>
            </div>
        );
    }
}