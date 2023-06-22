import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cartslice';
import loginReducer from './Loginslice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        login:loginReducer
    },
});

export default store;