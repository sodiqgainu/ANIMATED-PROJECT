import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)
import './App.css'
import Navbar from './components/navbar/Navbar'

const App = () => {

const [themeToggle, setThemeToggle] = useState(false)

const toggleTheme = () => {
  setThemeToggle(!themeToggle)
  console.log(themeToggle)

}

  const cursor = useRef()

  document.addEventListener('mousemove', (event) =>{
    gsap.to(cursor.current,{
     left: event.clientX +'px',
      top: event.clientY + 'px',
      
    })

  })
  

  return (
    <div className={` h-screen ${themeToggle ? 'bg-black text-white' : 'bg-white text-black'}`} >

    <div className='main'>
      <Navbar toggleTheme={toggleTheme} themeToggle={themeToggle} />

    </div>
   

        <div className=' mouse  ' ref={cursor}/>
    </div>

  )
}

export default App