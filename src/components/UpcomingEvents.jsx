import React from 'react'

const UpcomingEvents = () => {
  return (
    <div className='h-screen w-full bg-zinc-800 p-4'>
      <div className='max-w-screen-lg mx-auto flex h-full px-4 md:flex-row justify-center'>
        <div className='flex items-center w-1/2 text-center'>
          <h2 className='text-2xl sm:text-7xl font-bold text-white'>
            No Upcoming Events
          </h2>
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents
