import React, { useRef } from 'react'
import { FaPerson } from 'react-icons/fa6'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FaMoon, FaSun } from 'react-icons/fa'
useGSAP


const Navbar = ({toggleTheme, themeToggle}) => {

const navLine = useRef()


useGSAP(()=>{

  gsap.from('.nav',{
        perspective:'500px',
        y:'300px',
        z:5,
        duration:2,
  })
  gsap.to(navLine.current,{
    width:'100%',
    duration:2
  })

  
})

  return (
    <>
    <div className='flex justify-between px-6 py-5 items-center overflow-hidden' >
        <div className= 'flex  items-center lg:text-[2vw] text-2vw font-bold nav' >
            <h1>DEv.sordman </h1>
            <FaPerson/>
        </div>

        <div className='list-none flex items-center gap-[2rem] nav' >
          <li><a href="">About </a></li>
          <li><a href=""> Service </a></li>
          <li><a href=""> Blog</a></li>
        </div>

        <div className='nav'>
          {
            themeToggle?<FaMoon onClick={toggleTheme}/>:<FaSun onClick={toggleTheme}/>
          }
       
        </div>
    </div>

<div className=' px-6 flex justify-center'>
  
    <div ref={navLine} className={`h-[1px]  w-[0px] ${themeToggle ? 'bg-white' : 'bg-black'} `} />
</div>
    </>
  )
}

export default Navbar