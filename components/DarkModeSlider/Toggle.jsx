'use client'

import { ThemeContext } from "@context/ThemeContext"
import { useContext } from "react"


const Toggle = () => {
    const {Toggle,mode}=useContext(ThemeContext);
       return (
                             
           <div className='toggle relative' onClick={()=>Toggle()}>
               <div className='icons'>🌙</div>
               <div className='icons'>🔆</div>
               <div className='ball' style={ mode=== 'light' ? { left: '2px' } : { right: '2px' }}/>
           </div>
               )
}

export default Toggle