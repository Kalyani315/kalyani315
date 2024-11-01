import { configureStore, createSlice } from "@reduxjs/toolkit";

// Product Slice
const productSlice = createSlice({
    name: 'products',
    initialState:{ veg:[
        {name:'tomato',price:50.5},
        {name:'potato',price:40.8},
        {name:'panner',price:100.8},
        {name:'mushroom',price:150.8},
    ],
nonVeg:[
    { name:'chicken',price:250.0},
    {name:'fish',price:300.0} ,
    {name:'prawns',price:400.0} ,
    {name:'eggs',price:180.0} ,
   
        ],
    },
    reducers: {},
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item.name === action.payload.name);
            if (existingItem) {
                existingItem.quantity += 1; 
            } else {
                state.push({ ...action.payload, quantity: 1 }); 
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1; 
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item && item.quantity > 1) {
                item.quantity -= 1; 
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.name !== action.payload.name); 
        }
    }
});

// Configure Store
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
    },
});

// Export actions and store
export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;
export default store;