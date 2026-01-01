import { useState } from 'react'

import arrow3 from "../assets/images/arrow3.png"


function ChatSection() {
  

  return (
          <>                               
            <div className='flex flex-col items-center justify-center bg-blue-600 py-12'>                
                <div className='flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden items-center '>
                  <img className="rotate-180" src={arrow3} alt="arrow-right" />
                </div>
                <h1 className="text-3xl text-white md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-widest md:tracking-wider lg:tracking-wider xl:tracking-wider">
                  Any questions?<span className="text-amber-500">Let's talk.</span>
                </h1>
                <div className='flex items-center w-full justify-center mt-5 sm:mt-auto md:mt-auto lg:mt-auto xl:mt-auto 2xl:mt-auto'>                
                    <div className='hidden sm:flex md:flex lg:flex xl:flex 2xl:flex items-center'>
                      <img src={arrow3} alt="arrow-left" />
                    </div>
                    <button className="btn-warning text-white font-bold py-2.5 sm:py-3.5 md:py-3.5 lg:py-3 xl:py-3 px-3.5 sm:px-5 md:px-8 lg:px-8 xl:px-8 2xl:px-8 rounded flex items-center justify-center shadow-md hover:shadow-lg shadow-gray-500 mx-8 w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto ">
                      Chat with an Expert
                    </button>
                    <div className='hidden sm:flex md:flex lg:flex xl:flex 2xl:flex items-center '>
                      <img className="rotate-180" src={arrow3} alt="arrow-right" />
                    </div>
                </div>
                <div className='flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden items-center'>
                  <img src={arrow3} alt="arrow-left" />
                </div>
            </div>
            
          </>
  )
}

export default ChatSection
