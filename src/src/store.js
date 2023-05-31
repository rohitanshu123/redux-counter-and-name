import { configureStore } from "@reduxjs/toolkit";

import userReducers from "./userreducers";

const store = configureStore({

    reducer : {
        user : userReducers

    }
})

export default store;