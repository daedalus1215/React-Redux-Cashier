import React, { Component } from 'react';
import GroceryItems from './GroceryItems/GroceryItems';


export default class App extends Component {
    render() {

        return (
            <div>
                <h1>Welcome!</h1>
                <p>Here's is my react App default component</p>
                <GroceryItems/>
            </div>
        );
    }
}