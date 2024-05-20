import React, { useState } from 'react'
import SuggestionGpt from './SuggestionGpt'
import {lang} from '../utils/langConst'
import { useDispatch, useSelector } from 'react-redux'
import { addinputResults } from '../utils/gtpSlice'
import SearchMovie from './SearchMovie'
const GptSearchBar = () => {

  const langSlice = useSelector(store=>store.lang.defaultLang);

  const [inputValue,setInputValue]=useState("");
  const dispatch = useDispatch();

  const handelInputChange =(e)=>{
   setInputValue(e.target.value)
  }


  const handelIndputValue =(e)=>{
    e.preventDefault();
    dispatch(addinputResults(inputValue))
    setInputValue("")
  }
  return (
<div className='w-[100%] mt-[10%]'>
    <div className=''>
     <form className="flex justify-center items-center gap-5 bg-black" >
            
                  <input 
                    className="w-1/2 my-2 p-3 bg-slate-800 rounded-r "
                    type="text"
                    placeholder={lang[langSlice]?.getSearch}
                   onChange={handelInputChange}
                    value={inputValue}
                  />

                <button
                  className="w-[22%] my-2 p-3  bg-red-700 rounded lg:text-[19px] text-[12px] text-white" onClick={handelIndputValue} >{lang[langSlice]?.search}
                </button>
              </form>
              <SearchMovie/>
    </div>
</div>    
    )
}

export default GptSearchBar
