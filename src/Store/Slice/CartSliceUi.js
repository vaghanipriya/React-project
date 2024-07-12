import { createSlice } from "@reduxjs/toolkit";

const CartSliceUi = createSlice({
    name: "cartUi",
    initialState: {
        cartVisible: false
    },
    reducers: {
        toggle(state) {
            state.cartVisible = !state.cartVisible;
        }
    }
})

export const cartUiAction = CartSliceUi.actions;
export default CartSliceUi;