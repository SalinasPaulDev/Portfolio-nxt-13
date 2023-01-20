import React from 'react'
import styles from '../../styles/Navbar.module.css'
import { Link as LinkScroll } from 'react-scroll'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <LinkScroll className='link' activeClass='active' to='header' spy smooth offset={0} duration={500}>Home</LinkScroll>
          <LinkScroll className='link' activeClass='active' to='about' spy smooth offset={0} duration={500}>Sobre mi</LinkScroll>
          <LinkScroll className='link' activeClass='active' to='project' spy smooth offset={0} duration={500}>Portfolio</LinkScroll>
          <LinkScroll className='link' activeClass='active' to='experience' spy smooth offset={0} duration={500}>Experiencia</LinkScroll>
          <LinkScroll className='link' activeClass='active' to='contact' spy smooth offset={0} duration={500}>Contacto</LinkScroll>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
