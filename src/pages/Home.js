import React from 'react'
import card from "../assets/wedding.jpg"

const Home = ()=>{
  return(
    <section className='w-full h-[95vh]'>
      <div >
        <img src={card} alt="card" className='object-cover w-full h-[95vh]'/>
      </div>
      <div className='static -mt-96 text-center'>
        <div className='pb-4 md:pb-10' style={{fontFamily:"Dancing Script",fontStyle:"normal",fontWeight:"bold"}}>
          <h3 className='text-2xl md:text-3xl'>Make an Exquisite</h3>
          <h3 className='text-2xl md:text-3xl'>First Impression</h3>
        </div>

        <p className='text-[12px] pb-10 px-6' style={{fontFamily:"Slabo 27px",fontStyle:"normal"}}>Let's start We'll help you elegantly communicate with your wedding guests every step of the way</p>
        <button className='px-8 py-4 bg-black text-white rounded-full'>Get Started!</button>
      </div>
    </section>
  )
}

export default Home