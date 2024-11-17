import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import TextPlugin from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import './Section2.css'
gsap.registerPlugin(TextPlugin, ScrollTrigger)
const Section2 = () => {

const text1 = useRef()

useGSAP(()=>{
const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:'.container1',
        start:'top 70%',
        end:'bottom bottom',
 
    }
})

tl1.to(text1.current,{
   text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis modi doloremque optio dolorum ipsa sint sed obcaecati harum dignissimos.',
   duration:7
}) 
tl1.from('.img1',{
  x:'400px',
  duration:2,
},'0')

tl1.from('.img2',{
  x:'-400px',
  duration:2,
},'0')
})

  return (
    <div className=' lg:py-[10rem] py-[5rem] my-[5rem] '>
      {/* first div */}
      <div className='flex lg:flex-row md:flex-col flex-col gap-10 px-[4rem] container1 justify-between items-center' >
          <div className='lg:max-w-[600px] lg:text-left md:text-center text-center md:w-full  font-[berisa] text-2xl'>
            <h2 ref={text1}  className='text-black lg:text-[2vw] text-[3vw] '></h2>
          </div>

{/* imgs */}
          <div className='flex lg:max-w-[500px] w-full'>
             <div className='overflow-hidden img-perspective '>

                <img src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="" className='img1' />
               
            </div>

             <div className='overflow-hidden img-perspective'>
                <img src="https://media.istockphoto.com/id/1650830497/photo/businessman-talking-on-the-phone-in-the-office.jpg?s=612x612&w=0&k=20&c=xXV5WqAXJItD8OElK5lCD0zknUo_qGOl8oOtI1WtXtE=" alt="" className='img2' />
             </div>
          </div>
      </div>
    </div>
  )
}

export default Section2