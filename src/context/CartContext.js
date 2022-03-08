import React, { useReducer } from 'react';


// functions
import {sum} from '../helpers/functions'

// our shop items , total item , total price, chechked out or not
const cartInitialState = {
    selectedItems: [],
    counter: 0,
    total: 0,
    checkout: false
}

const cartReducer = (state, action) => {
    console.log(state);

    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            return {
                ...state,
                ...sum(state.selectedItems),
            };
        case "REMOVE_ITEM":
            const newItems = state.selectedItems.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                selectedItems: [...newItems],
                ...sum(state.selectedItems),
            };
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sum(state.selectedItems),
            };
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sum(state.selectedItems),
            };
        case 'CHECKOUT':
            return {
                selectedItems: [],
                counter: 0,
                total: 0,
                checkout: true,
            };
        case 'CLEAR':
            return {
                selectedItems: [],
                counter: 0,
                total: 0,
                checkout: false,
            };
        default :
            return state
    }
}

export const cartCon = React.createContext()

const CartContext = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    return (
        <cartCon.Provider value={{state, dispatch}}>
            {children}
        </cartCon.Provider>
    );
};

export default CartContext;