import React from 'react'
import styles from '../../styles/Ticket.module.css'

const Ticket = ({ text }) => {
  return (
    <div className={styles.container}>
      <div>{text}</div>
    </div>
  )
}

export default Ticket
