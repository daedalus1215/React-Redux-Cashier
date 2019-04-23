import {UNDO, REDO, ADD_TO_CART, REMOVE_FROM_CART } from './actions.js';

const GROCERY_ITEMS = [
    {
        name: "Bacon", price: 5.79
    },
    {
        name: "Hotdogs", price: 0.79
    },
    {
        name: "Beans", price: 0.79
    },
    {
        name: "Jelly", price: 7.79
    },
    {
        name: "Peanut Butter", price: 2.79
    },
    {
        name: "Butter", price: 0.79
    },
    {
        name: "Milk", price: 0.79
    },
    {
        name: "Sugar", price: 5.00
    },
    {
        name: "Bars", price: 2.79
    },
    {
        name: "Veggies", price: 1.79
    },
];

const CartReducer = (state, action) => {
    console.log("action: ", action);
    if (state === undefined) {
        return {
            forSale: GROCERY_ITEMS,
            cart: [],
            history: [[]],
            historyIndex: 0
        }
    }

    switch (action.type) {
        case UNDO: {
            let historyIndex = state.historyIndex - 1;
            historyIndex = Math.max(historyIndex, 0); // prevent negative numbers
            return {
                ...state,
                cart: state.history[historyIndex],
                historyIndex,
            }
        }
        case REDO: {
            let historyIndex = state.historyIndex + 1;
            historyIndex = Math.min(historyIndex, state.history.length - 1); // prevent going higher than the array has of items
            return {
                ...state,
                cart: state.history[historyIndex],
                historyIndex,
            }
        }
        case ADD_TO_CART: {
            const cart = [...state.cart, action.item];        
            
            // copy all of the history
            const history = [...state.history];
            // chop off all recorded future history that happened after this point in time.
            // Performing actions in the past destroys all of the prev future. You can't go back to the future.
            history.splice(state.historyIndex + 1, history.length);

            // add the current cart state tot he end of the history array
            history.push(cart);
            // mark our historyIndex as being the last thing in the array
            const historyIndex = state.history.length - 1;
            
            return {
                ...state,
                cart,
                history,
                historyIndex
            };
        }
        case REMOVE_FROM_CART: {
            const cart = [...state.cart];
            cart.splice(action.index, 1);

            // copy all of the history
            const history = [...state.history];
            history.splice(state.historyIndex + 1, state.history.length);
            
            history.push(cart);
            const historyIndex = state.history.length - 1;

            return {
                ...state,
                cart,
                history,
                historyIndex
            }
        }
        default: {
            return state;
        }
    }
}

export default CartReducer;

