import React from 'react'
import HomeButton from '../../components/HomeButton/HomeButton'
import Menu from '../../components/Menu/Menu'
import "./Nav.scss"

const Nav = () => {
  return (
    <div className='nav-container'>
        <HomeButton/>
        <Menu/>
    </div>
  )
}

export default Nav