import React from 'react'
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>Home</li>
          <li>Sobre mi</li>
          <li>Portfolio</li>
          <li>Skills</li>
          <li>Experiencia</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
