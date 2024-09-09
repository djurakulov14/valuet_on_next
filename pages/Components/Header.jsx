import React from 'react'
import { GoSearch } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { FiBell } from "react-icons/fi";

const Header = () => {
  return (
    <header className=' fixed right-0 w-[82%] px-[32px] pt-[32px] flex flex-col gap-[20px] '>
        <div className="flex justify-between">
            <div className="left w-[20%] rounded-full bg-[#161245] inpSearch flex justify-between gap-[10px] p-2 px-5">
                <input  type={'search'}  className='bg-transparent outline-0 w-full'/>
                <GoSearch size={25}/>
            </div>
            <div className="right flex gap-[30px] text-[#54669C]">
                <FiMail size={35}/>
                <FiBell size={35}/>
            </div>
        </div>
        <div className="border-b-2 border-[#2D317A]">

        </div>
    </header>
  )
}

export default Header