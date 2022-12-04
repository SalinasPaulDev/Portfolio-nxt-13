import React from 'react'
import styles from '../../styles/Ticket.module.css'

const Ticket = ({ text, size, style }) => {
  return (
    <div style={style} className={size === 'small' ? styles.containerSmall : styles.container}>
      <div>{text}</div>
    </div>
  )
}

export default Ticket
