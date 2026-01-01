import { useState, useRef } from 'react'
import logo from "../assets/images/logos/logo.svg"
import call from "../assets/images/call.png"
import ratingStar from "../assets/images/star.svg"
import star from "../assets/images/star.png"
import passport from "../assets/images/passport.png"
import vector from "../assets/images/Vector.png"
import imageBg from "../assets/images/bg1.png"

import image1 from "../assets/images/image_1.png"
import image3 from "../assets/images/image_2.png"
import image2 from "../assets/images/image_3.png"
import image4 from "../assets/images/image_4.png"
import arrow1 from "../assets/images/arrow_1.png"
import arrow2 from "../assets/images/arrow_2.png"

import flash from "../assets/images/flash.png"
import clipboardTick from "../assets/images/clipboard_tick.png"
import shieldSecurity from "../assets/images/shield_security.png"
import profile2user from "../assets/images/profile2user.png"
import Customer from "../components/Customer"
import ChatSection from "../components/ChatSection"
import CopyRight from "../components/CopyRight"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

function Home() {
  
  const services = [{days: 2, serviceType: 'Emergency Service', price: '599.00'},
                    {days: 4, serviceType: 'Priority Service', price: '499.00'},
                    {days: 6, serviceType: 'Rush Service', price: '399.00'},
                    {days: 10, serviceType: 'Standard Service', price: '349.00'},
                    {days: 60, serviceType: 'Expert Consulting Service', price: '149.00'}]

  const ratings = [{comment: "Best on the market", days: '2 days ago', rating: 5, user: 'worldtraveler', 'details': 'I love this product because the support is great. Please....'},
                    {comment: "Best on the market", days: '2 days ago', rating: 5, user: 'worldtraveler', 'details': 'I love this product because the support is great. Please....'},
                    {comment: "Best on the market", days: '2 days ago', rating: 5, user: 'worldtraveler', 'details': 'I love this product because the support is great. Please....'},
                    {comment: "Best on the market", days: '2 days ago', rating: 5, user: 'worldtraveler', 'details': 'I love this product because the support is great. Please....'},
                    {comment: "Best on the market", days: '2 days ago', rating: 5, user: 'worldtraveler', 'details': 'I love this product because the support is great. Please....'}]

    const swiper = useRef(null); //useSwiper();
    

  return (
    <>                     
          <main>     
            <header className='pt-10 md:pt-2 lg:pt-2 xl:pt-2'>
              <div className='flex justify-between items-center margins'>
                  <img className="w-23 sm:w-1/5 md:w-auto lg:w-auto xl:w-auto" src={logo} alt="passport" />
                
                  <button className="btn-warning hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3.5 md:py-3.5 lg:py-3 xl:py-3 px-3.5 sm:px-5 md:px-8 lg:px-8 xl:px-8 rounded flex items-center justify-center shadow-md hover:shadow-lg shadow-gray-500">
                    <img src={call} alt="call" />&nbsp;
                    <span className='hidden md:block lg:block xl:block text-lg ml-1'>844-804-6223</span>
                  </button>
                </div>
            </header>                               
            <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row sm:flex-wrap font-bold hero pl-4 md:pl-5 lg:pl-5 xl:pl-5 pr-4 md:pr-5 lg:pr-5 xl:pr-5'>
              <div className='flex flex-col w-full lg:w-3/6'>
                <h1 className="main-heading text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mt-16 sm:mt-27 md:mt-27 lg:mt-27 xl:mt-27 tracking-wide sm:tracking-wide lg:tracking-wide xl:tracking-wide leading-16 md:leading-16 lg:leading-20 xl:leading-20">
                  Get your new US P<span className="text-black-800 md:text-red-800 lg:text-red-800 xl:text-red-800">assport in as little </span>as<span className="text-blue-800"> 2 business days</span>
                </h1>
                <div className='content font-normal mt-3 sm:mt-0.5 md:mt-0.5 lg:mt-0.5 xl:mt-0.5 sm:w-10/12 md:w-10/12 lg:w-10/12 xl:w-10/12'>
                  <div className='text-lg md:text-2xl lg:text-2xl xl:text-2xl font-normal leading-6.5 sm:leading-10 md:leading-10 lg:leading-10 xl:leading-10 sm:tracking-wide md:tracking-wide lg:tracking-wide xl:tracking-wide'>Trusted Expedited New Passport Application Services for over 25 Years</div>
                </div>
                <button className="sm:w-2/5 md:w-2/5 lg:w-2/4 xl:w-2/5 btn-primary hover:bg-blue-700 text-white text-md sm:text-base md:text-lg xl:text-lg lg:text-lg py-3 mt-4 sm:mt-3 md:mt-3 lg:mt-3 xl:mt-3 rounded flex items-center justify-around tracking-wider shadow-md hover:shadow-lg shadow-gray-500">                  
                  Get My Fast Passport 
                </button>
                <div className='review-warpper max-w-59 sm:max-w-60 md:max-w-60 lg:max-w-60 xl:max-w-60 flex flex-col pr-2 mt-8 sm:mt-16 md:mt-16 lg:mt-16 xl:mt-16 sm:mb-38 md:mb-38 lg:mb-38 xl:mb-38'>
                  <div className='flex flex-row justify-between'>
                    {
                      [1,2,3,4,5].map((i, a) => (
                        <img className='w-9.5 sm:w-10 md:w-10 lg:w-10 xl:w-10' key={i} src={ratingStar} alt="star" />
                      ))
                    }
                  </div>
                  <div className='reviews-count mt-2.5 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2'>
                      <div className='font-light text-sm sm:ml-0.5 md:ml-0.5 lg:ml-0.5 xl:ml-0.5'>Based on <span className='font-bold underline'>10,014 reviews</span></div>
                  </div>
                  <div className='flex mt-2'>
                    <img className='w-6 sm:w-7 md:w-7 lg:w-7 xl:w-7' src={star} alt="star" />
                    <div className='font-medium text-base ml-1 tracking-tight'>Trustpilot</div>
                  </div>                      
                </div>
              </div>
              <div className='passport relative w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2 h-54 sm:h-54 md:h-54 lg:h-auto xl:h-auto 2xl:h-auto'>                   
                <img className='absolute -bottom-35 sm:-bottom-35 md:-bottom-35 xl:bottom-1/3 lg:bottom-1/3 2xl:bottom-1/3 -right-50 sm:right-1 md:-right-50 lg:-left-40 xl:-left-50 2xl:-left-50' src={imageBg} alt="background" />                              
                <img className='absolute bottom-1/5 sm:bottom-1/5 md:bottom-1 lg:bottom-1/5 xl:bottom-1/5 -right-6 sm:-right-6 md:-right-6 lg:-right-6 xl:-right-6' src={passport} alt="passport" />              
                <img className='absolute bottom-5/12 sm:bottom-1/12 md:bottom-5/12 lg:bottom-1/3 xl:bottom-5/12 -left-13 sm:-left-18 md:-left-8 lg:-left-22 xl:-left-16 2xl:-left-16' src={vector} alt="vector" /> 
              </div>              
                            
            </div>

            <section className='pricing-section'>
              <div className='flex justify-center pt-12'>
                <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl font-bold tracking-widest md:tracking-wider lg:tracking-wider xl:tracking-wider">
                  What We<span className="text-blue-800">Offer?</span>
                </h1>
              </div>
              <div className='flex justify-center mt-4'>
                <div className='flex bg-white px-2 py-2 btn-group justify-between rounded'>
                  <button className="btn-warning hover:bg-blue-700 text-white font-semibold text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg px-6 py-3 rounded flex items-center justify-around shadow-md hover:shadow-lg shadow-gray-500">                  
                    New Passport
                  </button>
                  <button className="font-semibold text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg px-5 sm:px-6 md:px-6 lg:px-6 xl:px-6 py-3 rounded flex items-center justify-around hover:bg-orange-400 hover:text-white active:shadow-md hover:shadow-lg shadow-gray-500">                  
                    Passport Renewal
                  </button>
                </div>
              </div>
              <div className='flex mt-18 px-6'>
                <div className='flex flex-col items-center lg:flex-row xl:flex-row w-full mt-6 py-10 lg:items-baseline xl:items-baseline justify-between'>
                    {
                      services.map((service, i) => (
                        <div key={i} className='flex flex-col justify-center items-center font-bold price-card'>
                          <div className='w-16 h-16 bg-amber-600 rounded-4xl flex justify-center items-center border-4 border-blue-50 -mt-12 z-1'>
                            <span className='text-bold text-3xl text-white'>{service.days}</span>
                          </div>
                          <div className='pricing-card-heading text-white text-center text-lg font-semibold w-full py-2.5 -mt-2 rounded'>
                            Business Days
                          </div>
                          <div className="w-full flex flex-col justify-center items-center text-center mt-1 bg-white rounded h-41">
                            <div className='font-semibold text-xl h-1/3 leading-6.5 mt-3 '>
                              {service.serviceType}
                            </div>
                            <div className='border-t-2 border-t-blue-100 w-1/3 mt-3'></div>
                            <div className='w-full py-5 -mt-1 flex flex-row justify-center text-blue-800 font-bold tracking-widest'>                              
                              <span className='text-xl'>$  </span>
                              <p><span className='text-4xl'> {service.price}</span></p>
                            </div>
                          </div>
                          <button className="border-2 mt-1.5 px-11 sm:px-5 md:px-4 py-2 rounded flex items-center justify-center hover:shadow-md shadow-gray-500">
                            <span className='font-semibold text-lg hover:text-white'>Get My Passport</span>
                          </button>
                        </div>
                      ))
                    }
                </div>
              </div>
              <div className='flex px-10 sm:px-10 md:px-20 lg:px-20 xl:px-20 2xl:px-20 mb-6.5'>
                <div className='flex w-full flex-col sm:flex-row lg:flex-row xl:flex-row justify-between relative'>
                  {/* https://swiperjs.com/react */}
                  <div className='absolute bottom-1/2 -ml-6 z-10'><button className='bg-white px-5 py-3 rounded-4xl' onClick={() => { swiper.current.swiper.navigation.nextEl.click()}}>&lt;</button></div>
                  <div className='absolute bottom-1/2 right-0 -mr-6 z-10'><button className='bg-white px-5 py-3 rounded-4xl' onClick={() => { swiper.current.swiper.navigation.prevEl.click()}}>&gt;</button></div>
                  
                  <Swiper
                    ref={swiper}
                    modules={[Navigation]}
                    spaceBetween={20}
                    navigation
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                  >                  
                    {
                        ratings.map((rating, i) => (
                          <SwiperSlide key={i}>
                            <div className='rating-card py-9 rounded-2xl px-5 ml-1'>                          
                              <div className='w-full flex justify-between py-1'>
                                <div className='flex w-26 justify-between items-center -mt-0.5'>
                                  {
                                    [1,2,3,4,5].map((i, a) => (
                                      <img className='w-5' key={i} src={ratingStar} alt="star" />
                                    ))
                                  }
                                </div>
                                <span className='text-xs'>{rating.days}</span>
                              </div>
                              <div className='text-lg font-bold pt-1.5 text-neutral-900'>
                                {rating.comment}
                              </div>
                              <div className='text-sm mt-1 text-neutral-900'>
                                {rating.details}
                              </div>            
                              <div className='text-sm font-bold capitalize py-1 mt-3 text-neutral-900'>
                                {rating.user}
                              </div>                          
                            </div>
                          </SwiperSlide>
                        ))
                      }
                  </Swiper>
                </div>                
              </div>
              <div className='flex px-10 justify-center pb-14'>
                <div className='flex flex-col text-center'>
                  <p className=''>Rated <span className='font-medium text-base'>4.7 </span>/ 5 based on <span className='font-bold'>10,563 reviews</span>. Showing our 5 star reviews.</p>                
                  <div className='flex p-2 mt-2 justify-center'>
                    <img className='w-6' src={star} alt="star" />
                    <div className='font-bold text-base ml-1'>Trustpilot</div>
                  </div>                      
                </div>
              </div>
            </section>       
            <section className='section-bg-1 px-6 pb-10 lg:pb-0 xl:pb-0 2xl:pb-0'>       
              <div className='flex flex-row justify-center text-center'>
                  <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mt-22 text-white font-bold tracking-wide">
                    Get your <span className="text-global-1">Passport or Visa </span>in 4 easy steps
                  </h2>
              </div>
              <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row py-10 mt-5 steps'>
                
                <div className='flex flex-col items-center md:items-baseline lg:items-baseline xl:items-baseline 2xl:items-baseline w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-2'>                    
                    <div className='flex flex-col sm:flex-row md:flex-row xl:flex-row 2xl:flex-row  w-auto sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full justify-center md:justify-between lg:justify-between xl:justify-between 2xl:justify-between'>
                      <div className='bg-white rounded p-6'>
                        <img className='' src={image1} alt="Image" />
                      </div>
                      <div className='hidden md:flex lg:flex xl:flex 2xl:flex items-center justify-center'>
                        <img className='' src={arrow2} alt="Arrow1" />
                      </div>
                    </div>                    
                    <h2 className="text-2xl text-white font-semibold mt-5">
                      Apply online 
                    </h2>
                    <div className='text-base mt-1 text-white mt-2 text-center md:text-left lg:text-left xl:text-left 2xl:text-left'>Select the Passport service needed, and submit all necessary forms and documents along with your application.</div>
                </div>

                <div className='flex flex-col items-center md:items-baseline lg:items-baseline xl:items-baseline 2xl:items-baseline w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-2 mt-17 sm:mt-17 md:mt-38 lg:mt-38 xl:mt-38 2xl:mt-38'>                    
                    <div className='flex flex-col sm:flex-row md:flex-row xl:flex-row 2xl:flex-row  w-auto sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full justify-center md:justify-between xl:justify-between 2xl:justify-between'>
                      <div className='bg-white rounded py-6 px-6'>
                        <img className='' src={image3} alt="Image" />
                      </div>
                      <div className='hidden md:flex lg:flex xl:flex items-center justify-center'>
                        <img className='' src={arrow1} alt="Arrow1" />
                      </div>
                    </div>                    
                    <h2 className="text-2xl text-white font-semibold text-center mt-5">
                      Preparation 
                    </h2>
                    <div className='text-base mt-1 text-white mt-2 text-center md:text-left lg:text-left xl:text-left 2xl:text-left'>Your Account Manager quickly and personally reaches out to you and ensures you are at ease with the entire passport application process.</div>
                </div>
                
                <div className='flex flex-col items-center md:items-baseline lg:items-baseline xl:items-baseline 2xl:items-baseline  w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-2'>                    
                <div className='flex flex-col sm:flex-row md:flex-row xl:flex-row 2xl:flex-row  w-auto sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full justify-center md:justify-between xl:justify-between 2xl:justify-between'>
                      <div className='bg-white rounded px-9 py-6'>
                        <img className='' src={image2} alt="Image" />
                      </div>
                      <div className='hidden md:flex lg:flex xl:flex items-center justify-center'>
                        <img className='' src={arrow2} alt="Arrow1" />
                      </div>
                    </div>                    
                    <h2 className="text-2xl text-white font-semibold text-center mt-5">
                      Processing 
                    </h2>
                    <div className='text-base mt-1 text-white mt-2 text-center md:text-left lg:text-left xl:text-left 2xl:text-left'>Our team reviews and submits your documents while your Account Manager keeps you informed throughout the entire process.</div>
                </div>
                
                <div className='flex flex-col items-center md:items-baseline lg:items-baseline xl:items-baseline 2xl:items-baseline w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 px-2 mt-17 sm:mt-17 md:mt-38 lg:mt-38 xl:mt-38 2xl:mt-38'>                    
                    <div className='flex flex-row justify-center'>
                      <div className='bg-white rounded px-7 py-6'>
                        <img className='' src={image4} alt="Image" />
                      </div>
                      
                    </div>                    
                    <h2 className="text-2xl text-white font-semibold text-center mt-5">
                      Delivery 
                    </h2>
                    <div className='text-base mt-1 text-white mt-2 text-center md:text-left lg:text-left xl:text-left 2xl:text-left'>Your Passport is delivered via secure Fedex service.</div>
                </div>
              </div>
            </section>  

            <section className='process-sec'>
              <div className='px-6 py-15'>       
                <div className='flex flex-col items-center'>
                    <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl mt-2 font-bold tracking-wide text-neutral-900">
                      Make the <span className="text-blue-800">process easier </span>
                    </h2>
                    <div className='text-base mt-5 text-center text-neutral-900 sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left mt-2'>We have 4 features that make it easy to create passports and visas</div>
                </div>
                <div className='flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center mt-16 process'>

                  <div className='flex flex-col w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 items-center text-center px-16 py-9 sm:py-9 md:py-9 lg:py-17 xl:py-17 2xl:py-17 bg-white rounded'>                              
                      <div className='p-1 sm:p-1 md:p-1 lg:p-6 xl:p-6 2xl:p-6'>
                        <img className='' src={profile2user} alt="Image" />
                      </div>                                          
                      <h2 className="text-xl text-blue-800 font-semibold mt-5">
                        White Glove Concierge Service 
                      </h2>
                      <div className='text-sm mt-1 text-neutral-500 text-center mt-2'>Your personal account manager will guide you through the entire application process. Just friendly, professionals dedicated to you and your travel needs.</div>
                  </div>

                  <div className='flex flex-col w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 items-center text-center px-16 py-9 sm:py-9 md:py-9 lg:py-17.5 xl:py-17.5 2xl:py-17.5  bg-white rounded ml-0 lg:ml-6 xl:ml-6 2xl:ml-6 mt-6 lg:mt-auto xl:mt-auto 2xl:mt-auto'>                                 
                      <div className='p-1 sm:p-1 md:p-1 lg:p-8 xl:p-8 2xl:p-8'>
                        <img className='' src={flash} alt="Image" />
                      </div>                                          
                      <h2 className="text-xl text-blue-800 font-semibold mt-5">
                      Fast, Government Approved Services 
                      </h2>
                      <div className='text-sm mt-1 text-neutral-500 text-center mt-2'>We work with the United States Passport Agency to obtain your US passport application in as little as 24 hours.</div>
                  </div>
                </div>

                <div className='flex flex-col lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center mt-auto lg:mt-6 xl:mt-6 2xl:mt-6 process'>

                  <div className='flex flex-col w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 items-center text-center px-16 py-9 sm:py-9 md:py-9 lg:py-17 xl:py-17 2xl:py-17 bg-white rounded mt-6 lg:mt-auto xl:mt-auto 2xl:mt-auto'>                                        
                      <div className='p-1 sm:p-1 md:p-1 lg:p-10 xl:p-10 2xl:p-10'>
                        <img className='' src={clipboardTick} alt="Image" />
                      </div>                                          
                      <h2 className="text-xl text-blue-800 font-semibold mt-5">
                      Trusted Passport and Visa Services 
                      </h2>
                      <div className='text-sm mt-1 text-neutral-500 text-center mt-2'>We are a nationally recognized US passport and travel visa service by the Washington Post , New York Times and USA Today and ranked #1 by the US Passport Service.</div>
                  </div>

                  <div className='flex flex-col w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 items-center text-center px-16 py-10 sm:py-10 md:py-10 lg:py-21 xl:py-21 2xl:py-21  bg-white rounded ml-0 lg:ml-6 xl:ml-6 2xl:ml-6 mt-6 lg:mt-auto xl:mt-auto 2xl:mt-auto'> 
                      <div className='p-1 sm:p-1 md:p-1 lg:p-6 xl:p-6 2xl:p-6'>
                        <img className='' src={shieldSecurity} alt="Image" />
                      </div>                                          
                      <h2 className="text-xl text-blue-800 font-semibold mt-5">
                      Safe and Secure Processing With Status Updates 
                      </h2>
                      <div className='text-sm mt-1 text-neutral-500 text-center mt-2'>You can get the status of your US passport application online 24/7. You'll receive email updates as your passport application process is expedited.</div>
                  </div>
                </div>

                <h2 className="mt-20 text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl mt-2 font-bold tracking-wide text-center">
                    Join the thousands of <span className="text-blue-800">satisfied customers </span>
                  </h2>
                  <Customer />
                  
                </div>
                <ChatSection />
            </section>            
            <footer>
              <CopyRight  />
            </footer>
          </main>        
        
               
    </>
  )
}

export default Home
