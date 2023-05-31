import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : '',

    reducer : {
        setname : (state, action) => 
        {
         state.value = action.payload
        },

    },
});

export const {setname} = userSlice.actions;

export default userSlice.reducer;



