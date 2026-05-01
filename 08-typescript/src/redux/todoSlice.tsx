import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'


//bu tipi types da belirleyip burada kullandık
const initialState:TodoInitialState={
    todos:[] //boş array olarak başllatık
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        createTodo :(state:TodoInitialState,action:PayloadAction<TodoType>)=>{ //state=o anki veri,action= birşey eklme ve değiştirme ,payload=taşnan veri
            state.todos=[...state.todos , action.payload];
 
        }
    }
})

export const { createTodo } = todoSlice.actions
export default todoSlice.reducer

