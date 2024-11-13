import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  isSignedIn: boolean
  userName: string
  previousName: string
  changeName: string
}

const initialState: CounterState = {
  value: 0,
  isSignedIn : false,
  userName : 'Umer-Zulfiqar',
  previousName: 'Umer-Zulfiqar',
  changeName: 'ayyhah'
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    loginAction: (state) => {
        return {...state,isSignedIn: true}
    },
    logoutAction : (state) => {
        return {...state, isSignedIn: false }
    },
    updateNameAction: (state) =>{
        return{...state, userName: state.changeName}
    },
    OldAction : (state) =>{
        return{...state, userName: state.previousName}
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,loginAction,logoutAction,updateNameAction,OldAction } = counterSlice.actions

export default counterSlice.reducer