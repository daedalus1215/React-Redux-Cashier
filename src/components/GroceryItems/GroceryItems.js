import React, { Component } from 'react';


const GROCERY_ITEMS = [
    {
        name: "Bacon", price: "5.79"
    },
    {
        name: "Hotdogs", price: "0.79"
    },
    {
        name: "Beans", price: "0.79"
    },
    {
        name: "Jelly", price: "7.79"
    },
    {
        name: "Peanut Butter", price: "2.79"
    },
    {
        name: "Butter", price: "0.79"
    },
    {
        name: "Milk", price: "0.79"
    },
    {
        name: "Sugar", price: "5.00"
    },
    {
        name: "Bars", price: "2.79"
    },
    {
        name: "Veggies", price: "1.79"
    },
];



export default class GroceryItems extends Component {
    render() {
        return (
            <div className="grocery-items">
                <table>
                    <tbody border="1">
                    <tr>
                        <th>Item Price</th>
                        <th>Item Name</th>
                    </tr>
                    </tbody>
                    <tbody>
                    {GROCERY_ITEMS.map((item, index) => {
                        return <tr key={index}>
                            <td>
                                <button item={item} onClick={() => {
                                    this.props.addToCart(item)
                                }}>
                                    Add to cart
                                </button>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.name}</td>
                        </tr>                        
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}