import React from 'react'
import { TbReportMoney } from "react-icons/tb";
import { MdAppSettingsAlt } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
            <div className='  my-2 hover:scale-105 duration-500  '>
            <TbReportMoney className='text-5xl ml-[35%]'/>
            <h1 className='text-black font-bold my-3 ml-[28%] '>Web Development</h1>
            <h2 className='text-black text-2xl font-bold ml-[35%] my-3'>$149</h2>
            <p className='ml-[19%]'>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br /> Tenetur  architecto deleniti? <br />Delectus reiciendis ducimus accusantium consequuntur <br /> sint recusandae necessitatibus <br />velit, deserunt obcaecati!</p>
            <button className='inline w-[50%] bg-blue-400 ml-[25%] my-3 text-black p-3 rounded font-bold'>Start Trial</button>
            </div>

            <div className=' my-4 bg-gray-100 hover:scale-105 duration-500'>
            <BsPeopleFill className='text-5xl ml-[35%]'/>
            <h1 className='text-black font-bold my-3 ml-[28%] '>Digital Marketing</h1>
            <h2 className='text-black text-2xl font-bold ml-[35%] my-3'>$149</h2>
            <p className='ml-[19%]'>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br /> Tenetur  architecto deleniti? <br />Delectus reiciendis ducimus accusantium consequuntur <br /> sint recusandae necessitatibus <br />velit, deserunt obcaecati!</p>
            <button className='inline w-[50%] bg-black ml-[25%] my-3 text-green-500 p-3 rounded font-bold'>Start Trial</button>
            </div>

            <div className=' my-4 hover:scale-105 duration-500'>
            <MdAppSettingsAlt className='text-5xl ml-[35%]'/>
            <h1 className='text-black font-bold my-3 ml-[28%] '>App Development</h1>
            <h2 className='text-black text-2xl font-bold ml-[35%] my-3'>$149</h2>
            <p className='ml-[19%]'>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit. <br /> Tenetur  architecto deleniti? <br />Delectus reiciendis ducimus accusantium consequuntur <br /> sint recusandae necessitatibus <br />velit, deserunt obcaecati!</p>
            <button className='inline w-[50%] bg-blue-400 ml-[25%] my-3 text-black p-3 rounded font-bold'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}
