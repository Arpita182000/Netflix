import { configureStore } from '@reduxjs/toolkit';
import userSlice from "./userSlice";
import movieSlice from './movieSlice';
import gtpSlice from './gtpSlice';
import gptlangSlice from './gptlangSlice';

const Appstore=configureStore({
    reducer:{
        user:userSlice,
        movie:movieSlice,
        gpt:gtpSlice,
        lang:gptlangSlice,
    }
})
export default Appstore;