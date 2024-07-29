import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numofChocolates: 15
}

const chocoSlice = createSlice({
    name: "choco",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofChocolates = state.numofChocolates -1
        },
        restocked: (state, action) => {
            state.numofChocolates = state.numofChocolates + action.payload
        }
    }
})

export const { ordered, restocked } = chocoSlice.actions
export default chocoSlice.reducer