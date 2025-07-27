import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice ({
    name: 'carts',
    initialState: {
        items: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        // add to cart
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.items.push({ ...action.payload, quantity: 1 });
            }
          },
        //increment quantity
        incrementQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
              item.quantity += 1;
            }
          },


        //decrement quantity
        decrementQuantity: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            }
          },

        //remove from cart
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
          }

    }
})

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions
export default cartSlice.reducer