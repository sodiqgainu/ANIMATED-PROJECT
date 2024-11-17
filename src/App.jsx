import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)
import './App.css'
import Navbar from './components/navbar/Navbar'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'

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
    <div className={` transition-all duration-300 h-full ${themeToggle ? 'bg-black text-white ' : 'bg-white text-black'}`} >

    <div className='main '>
      <Navbar toggleTheme={toggleTheme} themeToggle={themeToggle} />
      <Section1 themeToggle={themeToggle} />
      <Section2 themeToggle={themeToggle}/>
      <Section3 themeToggle={themeToggle}/>
    </div>
   

        <div className=' mouse  ' ref={cursor}/>
    </div>

  )
}

export default App