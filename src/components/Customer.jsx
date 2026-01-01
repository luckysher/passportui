import { useState } from 'react'


import microsoft from "../assets/images/micro.png"
import ch2mhill from "../assets/images/ch2mhill.png"
import cnn from "../assets/images/cnn.png"
import mizuno from "../assets/images/mizuno.png"
import ups from "../assets/images/ups.png"
import siemens from "../assets/images/siemens.png"


function Customer() {
  
  const customers = [microsoft, ups, ch2mhill, mizuno, siemens, cnn];

  return (
          <>                               
              <div className='grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 mt-10 justify-between'>                
                    {
                      customers.map((customer, i) => (
                        <div key={i} className='flex items-center justify-center p-3 sm:p-6 md:p-6 lg:p-6 xl:p-6 2xl:p-6'>                         
                          <img className='' src={customer} alt="Image" />                      
                        </div>
                      ))
                    }
                  </div>
                
              </>
  )
}

export default Customer
