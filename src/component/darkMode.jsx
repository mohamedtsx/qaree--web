import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
const DarkMode = () => {
    return (<div className='flex justify-between items-center'>
        < MdDarkMode className='mx-10' />
        <MdLightMode />
    </div>)
}

export default DarkMode;
