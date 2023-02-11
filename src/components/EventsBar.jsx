import React from 'react'

const EventsBar = () => {
  return (

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-stone-900">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-gradient-to-r from-pink-500 to-indigo-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Past Events</button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
      <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-transparent hover:text-gradient md:hover:bg-transparent md:hover:text-gradient md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-indigo-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gradient
">All</a>
      </li>
      <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-transparent hover:text-gradient md:hover:bg-transparent md:hover:text-gradient md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-indigo-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gradient">Community Meetups</a>
      </li>
      <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-transparent hover:text-gradient md:hover:bg-transparent md:hover:text-gradient md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-indigo-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gradient">Conferences</a>
      </li>
      <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-transparent hover:text-gradient md:hover:bg-transparent md:hover:text-gradient md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-indigo-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gradient">Live Events</a>
      </li>
      <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-transparent hover:text-gradient md:hover:bg-transparent md:hover:text-gradient md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-indigo-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gradient">Melody AI</a>
      </li>
      <li>
        <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-transparent hover:text-gradient md:hover:bg-transparent md:hover:text-gradient md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-indigo-500 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gradient selected">Webinars</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default EventsBar