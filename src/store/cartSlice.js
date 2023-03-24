import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        totalAmount:0
    },
    reducers:{
        addItemToCart(state,action){
            const newitem=action.payload;
            const existingItem = state.items.find(item=>item.id===newitem.id);
            if(!existingItem){
                state.items.push({itemId:newitem.id,price:newitem.price,quantity:1,totalPrice:newitem.price,title:newitem.title});
            }else{
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice+newitem.price;
            }
        },
        removeItemFromCart(state,action){
            const id=action.payload;
            const existingItem=state.items.find(item=>item.id===id);
            if(existingItem.quantity===1){
                state.items=state.items.filter(item=>item.id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
            }
        }
    }
})
export const cartActions=cartSlice.actions;
export default cartSlice