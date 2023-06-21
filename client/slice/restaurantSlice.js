import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    restaurant: {
        dishes: null,
    },
}

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        setRestaurant: (state, action) => {
            state.restaurant = action.payload
        },
    },
})
// Action creators
export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = state => state.restaurant.restaurant;

export default restaurantSlice.reducer