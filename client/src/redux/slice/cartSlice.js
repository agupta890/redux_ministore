import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        value:0
    },
    reducers:{
        addItem:(state)=>{
            state.value +=1
        },
        removeItem :(state)=>{
            if(state.value>0){
                state.value -=1
            }
        },

        clearCart :(state)=>{
            state.value = 0
        }
    }
    
})

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer