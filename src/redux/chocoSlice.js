import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfChocos: 15
}

const chocoSlice = createSlice({
    name: "choco",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfChocos = state.numOfChocos -1
        },
        restocked: (state, action) => {
            state.numOfChocos = state.numOfChocos + action.payload
        }
    }
})

export const { ordered, restocked } = chocoSlice.actions
export default chocoSlice.reducer