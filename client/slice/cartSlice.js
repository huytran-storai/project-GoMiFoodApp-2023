import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            let newCart = [...state.items];
            let itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1);
            }
            else {
                console.log("err");
            }
            state.items = newCart
        },
        emptyCart: (state, action) => {
            state.items = []
        },
    },
})
// Action creators
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

const selectCartItems = state => state.cart.items;

export const selectCart = createSelector(
    selectCartItems,
    items => items
  );

export const selectCartById = createSelector(
    selectCartItems,
    (state, id) => id,
    (items, id) => items.filter(item => item._id === id)
  );
  
  export const selectCartTotal = createSelector(
    selectCartItems,
    items => items.reduce((total, item) => total + item.price, 0)
  );

export default cartSlice.reducer