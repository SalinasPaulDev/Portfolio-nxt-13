import React from 'react'
import styles from '../../styles/Ticket.module.css'

const Ticket = ({ text, size }) => {
  return (
    <div className={size === 'small' ? styles.containerSmall : styles.container}>
      <div>{text}</div>
    </div>
  )
}

export default Ticket
