import React, { Component } from 'react';
import GroceryItems from './components/GroceryItems/GroceryItems';
import GroceryCart from './components/GroceryCart/GroceryCart';
import './style.css';


export default class App extends Component {
    render() {
        return <div id="app-container">
                    <h1>Grocery Cart</h1>
                    <div id="grocery-container">
                        <GroceryItems/>
                        <GroceryCart />
                    </div>
                </div>

    }
}