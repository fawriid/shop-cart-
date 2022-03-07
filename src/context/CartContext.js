import React, { useReducer } from 'react';

const cartInitialState = {
    selectedItems: [],
    counter: 0,
    total: 0,
    checkout: false
}

const cartReducer = (state, action) => {
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
                selectedItems: [...state.selectedItems],
            };
        case "REMOVE_ITEM":
            const newItems = state.selectedItems.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                selectedItems: [...newItems],
            };
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(
                (item) => item.it === action.payload.id
            );
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
            };
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(
                (item) => item.it === action.payload.id
            );
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
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
    }
}

export const cartCon = React.createContext()

const CartContext = ({children}) => {

    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState)

    return (
        <cartCon.Provider value={{cartState:cartState, cartDispatch:cartDispatch}}>
            {children}
        </cartCon.Provider>
    );
};

export default CartContext;