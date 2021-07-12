import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

function Nav() {
  const navStyles = { color: 'white' }

  return (
    <nav>
      <ul className='nav-links'>
        <Link style={navStyles} to='/jutsu'>
          <li className='listing'>Microsoft</li>
        </Link>
        <Link style={navStyles} to='/about'>
          <li className='listing'>About</li>
        </Link>
        <Link style={navStyles} to='/docs'>
          <li className='listing'>Docs</li>
        </Link>
      </ul>
    </nav>
  )
}
export default Nav
