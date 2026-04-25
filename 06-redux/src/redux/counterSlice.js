import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 40,
}


const counterSlice= createSlice({
    name:"counter",
    initialState,
    reducers:{ //fonksiyonları yazdığımız kısım state yukarıdaki initial state alanı
        increment:(state)=>{
            state.value= state.value+1
        },

        decrement:(state)=>{
            state.value=state.value-1
        }

    },


})


export const { increment,decrement } = counterSlice.actions //yukarıda yazdığımız fonksiyonları dışarıdan erişmek için 

export default counterSlice.reducer