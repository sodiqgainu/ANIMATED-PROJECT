import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { FaStar } from 'react-icons/fa'

const Section1 = ({themeToggle}) => {

const text = useRef()
const star = useRef()

 useGSAP(()=>{
const tl = gsap.timeline()


    tl.to('.line',{
        width: '100%',
        duration:2
    })

    tl.from('.text',{
        y:'200px',
        duration:1,

    },'0')
   tl.from('.star',{
      y:'200px',
      duration:0.5,
      rotate:360,
      delay:1
   },'0')

 })

  return (
    <div className='flex justify-center flex-col '>
        <div className='overflow-hidden'>
            <div className='flex justify-center items-center gap-[10px]'>

            <div className='star' >
            <FaStar className='text-[3vw]' />
            </div>
            
            <h1 className=' text-[5vw] py-[3rem]  font-[berisa] text' >
                LET YOUR DREAM COME TRUE
            </h1 >

            <div  className='star'>
            <FaStar className='text-[3vw]' />
            </div>

            </div>
            <div className='flex justify-center px-6'> 
              <div className={`line w-0 h-[1px] ${themeToggle ? 'bg-white':'bg-black'}`}/>
            </div>
        </div>


        <div className='overflow-hidden'>
            <div className='flex justify-center items-center gap-[10px]'>

            <div className='star' >
            <FaStar className='text-[3vw]' />
            </div>
            
            <h1 className=' text-[5vw] py-[3rem]  font-[berisa] text' >
                LET YOUR IMAGINATION RUN WILD
            </h1 >

            <div  className='star'>
            <FaStar className='text-[3vw]' />
            </div>

            </div>
            <div className='flex justify-center px-6'> 
              <div className={`line w-0 h-[1px] ${themeToggle ? 'bg-white':'bg-black'}`}/>
            </div>
        </div>
    </div>
  )
}

export default Section1