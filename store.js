import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import cartSlice from './slice/cartSlice'
import restaurantSlice from './slice/restaurantSlice'

export const store = configureStore({
  reducer: {
      cart: cartSlice,
      restaurant:restaurantSlice
=======
<<<<<<< HEAD
import cartSlice from './slices/cartSlice'
import restaurantSlice from './slices/restaurantSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice
=======
import cartSlice from './slice/cartSlice'
import restaurantSlice from './slice/restaurantSlice'

export const store = configureStore({
  reducer: {
      cart: cartSlice,
      restaurant:restaurantSlice
>>>>>>> OurSrouce/GoMiFoodApp-2023
>>>>>>> parent of 220b0ad5 (no message)
  },
})