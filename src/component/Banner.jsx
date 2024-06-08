import React from 'react'
import { ReactTyped } from "react-typed";

export default function () {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
        <div className='max-w-[1240px] mx-auto text-center font-bold py-[100px]'>

            <div className='text-xl md:text-3xl md:p-[24px] '>Learn with us</div>

            <div className=' text-white text-3xl md:text-[80px] md:p-[24px]'>Grow with us.</div>

            <div className='text-[20px] md:text-[50px] text-white md:p-[24px]'>Learn
                
                {/* used React typed package first install react typed website and import and used  */}
               <ReactTyped className='pl-3'
                 strings={['Web Development','Digital Marketing','Ethical Hacking']}
                 typeSpeed={100}
                 loop={true} 
                 backSpeed={120} />
                 
                 
            </div>
            
        </div>
    </div>
  )
}
