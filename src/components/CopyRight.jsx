import { useState } from 'react'

import arrow3 from "../assets/images/arrow3.png"


function CopyRight() {
  

  return (
          <>                               
            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between px-5 py-7'>                
              <div className='flex-col text-base text-gray-400'>
                  Copyright 1999-2022 Passport and Visas.com All rights reserved. 
              </div>
              <div className='flex flex-col mt-5 sm:mt-auto md:mt-auto xl:mt-auto lg:mt-auto 2xl:mt-auto'>
                <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row text-base text-gray-400 mt-5 sm:mt-5 md:mt-5 xl:mt-auto lg:mt-auto 2xl:mt-auto'>                
                  <div className='flex py-0 sm:py-auto md:py-auto lg:py-auto xl:py-auto 2xl:py-auto'><a href="#" className='hover:underline'>Privacy Policy</a><span className='px-3 hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex'>|</span></div>
                  <div className='flex py-0 sm:py-auto md:py-auto lg:py-auto xl:py-auto 2xl:py-auto'><a href="#" className='hover:underline'>Sitemap</a><span className='px-3  hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex'>|</span></div>
                  <div className='py-0 sm:py-auto md:py-auto lg:py-auto xl:py-auto 2xl:py-auto'><a href="#" className='hover:underline'>Terms of Service</a></div>                 
                </div>
              </div>
            </div>
            
          </>
  )
}

export default CopyRight
