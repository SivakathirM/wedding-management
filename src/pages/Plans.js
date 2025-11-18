import React from 'react'

const Plans = () => {
  return (
    <div className='w-full h-auto  bg-gray-300' style={{fontFamily:"Slabo 27px",fontStyle:"normal"}}>
      <div className='w-full flex md:items-center md:justify-center px-5 py-10 md:py-20 md:px-10 overflow-scroll'>
          <div className='w-[80%] h-auto md:w-[25%] bg-white rounded-lg'>
            <h1 className='w-[40%] my-4 px-4 py-2 bg-[linear-gradient(45deg,#00cdf3,#0179e9)] text-white rounded-r-full text-center'>BASIC</h1>
            <h1 className='ml-10'>
              <span className='text-zinc-500'>price</span>
              <span className='text-2xl pl-2 md:text-3xl mr-20'>₹30,000</span>
            </h1>
            <ul className='list-none m-4'>
              <li className='text-center border-b-2 py-1 border-[silver]'>Hall Decoration</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>video coverage</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>Photo</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>Drone</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>DJ</li>
            </ul>
            <button onClick={()=>{window.location.href="https://wa.me/9176087695?text=hello "}} className='w-[80%] ml-[10%] px-auto px-4 py-2 mb-4 rounded-full  bg-[linear-gradient(45deg,#00cdf3,#0179e9)] outline-none'>
              Contact
            </button>
          </div>
          <div className='w-[80%] h-auto ml-4 md:w-[25%] bg-white rounded-lg'>
            <h1 className='w-[40%] my-4 px-4 py-2 bg-[linear-gradient(45deg,#00cdf3,#0179e9)] text-white rounded-r-full text-center'>GOLD</h1>
            <h1 className='ml-10'>
              <span className='text-zinc-500'>price</span>
              <span className='text-2xl pl-2 md:text-3xl mr-20'>₹1,00,000</span>
            </h1>
            <ul className='list-none m-4'>
              <li className='text-center border-b-2 py-1 border-[silver]'>Hall Decoration</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>video coverage</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>Catering</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>Photo</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>Drone</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>DJ</li>
            </ul>
            <button onClick={()=>{window.location.href="https://wa.me/9176087695?text=hello "}} className='w-[80%] ml-[10%] px-auto px-4 py-2 mb-4 rounded-full  bg-[linear-gradient(45deg,#00cdf3,#0179e9)] outline-none'>
              Contact
            </button>
          </div>
          <div className='w-[80%] h-auto ml-4 md:w-[25%] bg-white rounded-lg'>
            <h1 className='w-[40%] my-4 px-4 py-2 bg-[linear-gradient(45deg,#00cdf3,#0179e9)] text-white rounded-r-full text-center'>PREMIUM</h1>
            <h1 className='ml-10'>
              <span className='text-zinc-500'>price</span>
              <span className='text-2xl pl-2 md:text-3xl mr-20'>₹1,30,000</span>
            </h1>
            <ul className='list-none m-4'>
              <li className='text-center border-b-2 py-1 border-[silver]'>Hall Decoration</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>video coverage</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>Meganhi</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>Makeup</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>Photo</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>Drone</li>
              <li className='text-center border-b-2 py-1 border-[silver]'>DJ</li>
            </ul>
            <button onClick={()=>{window.location.href="https://wa.me/9176087695?text=hello "}} className='w-[80%] ml-[10%] px-auto px-4 py-2 mb-4 rounded-full  bg-[linear-gradient(45deg,#00cdf3,#0179e9)] outline-none'>
              Contact
            </button>
          </div>
      </div> 
    </div>
  )
}

export default Plans
