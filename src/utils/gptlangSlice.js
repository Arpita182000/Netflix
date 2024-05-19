import { createSlice } from "@reduxjs/toolkit";

const gptlangSlice=createSlice({
    name:"lang",
    initialState:{
        defaultLang:"en"
    },
    reducers:{
        addLangSlice:(state,action)=>{
            state.defaultLang=action.payload
        }
    }
})

export const{addLangSlice} = gptlangSlice.actions;
export default gptlangSlice.reducer;