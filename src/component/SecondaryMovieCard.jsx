import React from 'react'
import {secondary_Api} from '../utils/Constance'
import one from '../img/1.webp'
import pic1 from '../img/2.webp'
import pic2 from '../img/3.webp'
import pic3 from '../img/4.webp'
import pic4 from '../img/5.webp'
import pic5 from '../img/6.webp'
import pic6 from '../img/7.webp'
import pic7 from '../img/8.webp'
import pic8 from '../img/9.webp'
import pic9 from '../img/10.webp'
import pi10 from '../img/11.webp'
import pi12 from '../img/13.webp'
const SecondaryMovieCard = ({image}) => {
  // console.log(secondary_Api+image)

  if(image == null){
    return(
      <div className='w-100 flex  justify-between items-center gap-6'>
        
        <img alt='popular image' className='rounded-lg w-[250px]' src={one}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pic1}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pic2}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pic3}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pic4}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pic5}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pic6}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pic7}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pic8}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pic9}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pi10}/>
        <img alt='popular image' className='rounded-lg w-[250px]' src={pi12}/>
      </div>
    )
  }
  return (
    <div className='w-[250px] pr-4'>
      <img alt='popular image' className='rounded-lg' src={secondary_Api+image}/>
    </div>
  )
}

export default SecondaryMovieCard
