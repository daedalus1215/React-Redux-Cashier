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
            cart: []
        }
    }

    switch (action.type) {
        case 'ADD_TO_CART': {
            console.log('add to cart');
            const cart = [...state.cart, action.item];        
            
            return {
                ...state,
                cart: cart
            };
        }
        case 'REMOVE_FROM_CART': {
            const cart = [...state.cart];
            cart.splice(action.index, 1);
            return {
                ...state,
                cart: cart
            }
        }
        default: {
            return state;
        }
    }
}

export default CartReducer;

