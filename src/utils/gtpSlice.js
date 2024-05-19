import {createSlice} from "@reduxjs/toolkit"


const gptSlice =  createSlice({
    name:"GPT",
    initialState:{
        toggleState:false,
        inputValue:null
    },
    reducers:{
        addToggleMenu:(state,action)=>{
            state.toggleState = !state.toggleState;
        },
        addinputResults:(state,action)=>{
            state.inputValue=action.payload
        }
    }
})

export const {addToggleMenu,addinputResults}=gptSlice.actions;
export default gptSlice.reducer;