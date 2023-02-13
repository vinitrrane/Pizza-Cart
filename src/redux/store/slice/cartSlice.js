import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
        },
        removeItem(state, action) {
            const itemIndex = state.indexOf(action.payload);

            state.splice(itemIndex, 1)

            // state.filter((item) => item._id != action.payload)
        },
        removeAll(state, action) {
            return [];
        }
    }
})

export default cartSlice.reducer;
export const { addItem, removeItem, removeAll } = cartSlice.actions;