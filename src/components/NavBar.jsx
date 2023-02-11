import React, { useState } from 'react'
import { Link } from 'react-scroll'

import { FaTimes, FaBars } from 'react-icons/fa'

// images links

// When using the new react, we use the links to the image rather importing it. That is if the image is in the public directory
const Logo = '/images/melody_ai_logo.png'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      links: 'product'
    },
    {
      id: 2,
      links: 'solutions'
    },
    {
      id: 3,
      links: 'resources'
    },
    {
      id: 4,
      links: 'company'
    },
  ]

  const rightLinks = [
    {
      id: 5,
      link: 'login'
    },
    {
      id: 6,
      link: 'consultation'
    },
  ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-zinc-800'>
      <div>
        <h1 className='text-5-xl font-headerName ml-2 text-white'>
          Logo
        </h1>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-white md:hidden'
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-start items-start absolute top-0 left-0 w-full h-screen bg-zinc-800 text-white'>
          <li
            className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105'
          >
            <Link
              onClick={() => setNav(!nav)}
              to={rightLinks[0].link}
              smooth
              duration={500}
            >
              {rightLinks[0].link}
            </Link>
          </li>
          {links.map(({id, links}) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105'
            >
              <Link
                onClick={() => setNav(!nav)}
                to={links}
                smooth
                duration={500}
              >
                {links}
              </Link>
            </li>
          ))}
          <li
            className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105'
          >
            <Link
              onClick={() => setNav(!nav)}
              to={rightLinks[1].link}
              smooth
              duration={500}
            >
              {rightLinks[1].link}
            </Link>
          </li>
        </ul>
      )}
    </div>
  )


}



export default NavBar
