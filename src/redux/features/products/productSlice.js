import { createSlice } from '@reduxjs/toolkit'


const initialState = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        category: 'Category 1',
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww',
        description: 'This is a product description'
    },
    {
        id: 2,
        name: 'Product 2',
        price: 200,
        category: 'Category 2',
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        description: 'This is a product description'
    },
    {
        id: 3,
        name: 'Product 3',
        price: 300,
        category: 'Category 3',
        quantity: 3,
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
        description: 'This is a product description'
    },
    {
        id: 4,
        name: 'Product 4',
        price: 400,
        category: 'Category 4',
        quantity: 4,
        image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
        description: 'This is a product description'
    }
]
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer;