import React from 'react'
import logo from '../assets/eventsPresent.png'

const Events = () => {
  return (
    <div className='h-screen w-full bg-stone-900'>
      <div className='max-w-screen-lg mx-auto flex h-full px-4 md:flex-row'>
        <div className='flex items-center justify-start w-1/2 text-center'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            Events
          </h2>
        </div>
        <div className='flex items-center justify-end w-1/2 mt-4'>
          <img src={logo} alt='present' />
        </div>
      </div>
    </div>
  )
}

export default Events
