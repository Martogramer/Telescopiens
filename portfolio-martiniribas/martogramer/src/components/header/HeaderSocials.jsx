import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/martogramer/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.github.com/martogramer/" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials