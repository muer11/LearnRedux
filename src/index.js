import store from "./store";
import {
    addToCart,
    updateCart,
    deleteFromCart
} from "./actions/cart-actions";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

const App = <h1>Redux shopping Cart</h1>

ReactDOM.render(
    <Provider store={store}>
        {App}
    </Provider>,
    document.getElementById('root')
);

console.log("initial state:", store.getState());

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));
store.dispatch(updateCart('Flour 1kg', 500, 999));
store.dispatch(deleteFromCart('Juice 2L'));

unsubscribe();

// import { createStore } from "redux";
// import { combineReducers } from "redux";
// const ADD_TO_CART = 'ADD_TO_CART';
// const initialState = {
//     cart: [
//         {
//             product: 'bread 700g',
//             quantity: 2,
//             unitCost: 90,
//         },
//         {
//             product: 'milk 500g',
//             quantity: 8,
//             unitCost: 10,
//         }
//     ]
// }

// const productReducer = function (state = [], action) {
//     return state;
// }
// const cartReducer = function(state=initialState, action){
//     switch(action.type){
//         case ADD_TO_CART:{
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload]
//             }
//         }
//         default:
//             return state;
//     }
    
// }
// const allReducers = {
//     products: productReducer,
//     cart: cartReducer,
// }
// const rootReducer = combineReducers(allReducers);
// let store = createStore(rootReducer);
// console.log("initial state:", store.getState());

// function addToCart(product, quantity, unitCost){
//     return {
//         type: ADD_TO_CART,
//         payload:{product, quantity, unitCost}
//     }
// }

// let unsubscribe = store.subscribe(()=>{
//     console.log(store.getState());
// });

// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));

// unsubscribe();




