import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import cakeReducer from "./cakeSlice"
import chocoReducer from "./chocoSlice"
import userReducer from "./userSlice"

const logger = createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        choco: chocoReducer,
        user: userReducer
    },
    /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) */ 
});

export default store;
