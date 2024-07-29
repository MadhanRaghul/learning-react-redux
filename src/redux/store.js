import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakeSlice"
import chocoReducer from "./chocoSlice"

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        choco: chocoReducer
    },
});

export default store;
