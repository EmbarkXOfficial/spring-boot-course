import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
    },
    preloadedState: {},
});

export default store;