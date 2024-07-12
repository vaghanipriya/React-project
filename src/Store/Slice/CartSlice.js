import { createSlice, current } from "@reduxjs/toolkit"


const items = localStorage.getItem("cartItems") !== null ? JSON.parse(localStorage.getItem("cartItems")) : []
const totalQuantity = localStorage.getItem(" totalQuantity") !== null ? JSON.parse(localStorage.getItem(" totalQuantity")) : 0
const totalAmount = localStorage.getItem(" totalAmount") !== null ? JSON.parse(localStorage.getItem(" totalAmount")) : 0

const setItem = (items, totalQuantity, totalAmount) => {
  localStorage.setItem("cartItems", JSON.stringify(items))
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity))
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount))

}


const initialState = {
  cartItem: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,

}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // console.log(action);
      const newItems = action.payload
      // console.log(newItems);
      const existingItem = state.cartItem.find(item => item.id === newItems.id)
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItem.push({
          id: newItems.id,
          title: newItems.title,
          image01: newItems.image01,
          price: newItems.price,
          totalprice: newItems.price,
          quantity: 1,
        })
      }
      else {
        existingItem.quantity++;
        existingItem.totalprice = Number(existingItem.totalprice) + Number(newItems.price)
      }
      console.log(current(state.cartItem));
      state.totalAmount = state.cartItem.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)
      // return state

      setItem(
        state.cartItem.map((item) => item),
        state.totalQuantity,
        state.totalAmount
      )
    },
    removeItem(state, action) {
      const newItems = action.payload
      const existingItem = state.cartItem.find(
        (item) => item.id === newItems.id
      )
      if (existingItem.quantity === 1) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== newItems.id
        )
      } else {
        existingItem.quantity--;
        existingItem.totalprice = Number(existingItem.totalprice) - Number(existingItem.price)
      }

      state.totalAmount = state.cartItem.reduce((total, item) =>
        total + Number(item.price) * Number(item.quantity), 0
      )
      setItem(
        state.cartItem.map((item) => item),
        state.totalQuantity,
        state.totalAmount
      )
    },
    delateItem(state, action) {
      const newItems = action.payload
      const existingItem = state.cartItem.find(
        (item) => item.id === newItems.id
      )
      if (existingItem) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== newItems.id)
        state.totalQuantity = state.totalQuantity - existingItem.totalQuantity



      }

      state.totalAmount = state.cartItem.reduce((total, item) =>
        total + Number(item.price) * Number(item.quantity), 0     
      )
      setItem(
        state.cartItem.map((item) => item),
        state.totalQuantity,
        state.totalAmount
      )
    }
  }

})


export const cartAction = cartSlice.actions;
export default cartSlice;