import React from 'react'
import Styles from '../../styles/Card.module.css'

export const Card = ({ actual = false, title, description }) => {
  return (
    <div className={`${Styles.cardContainer} ${actual && Styles.actual}`}>
      <h4>{title}</h4>
      <p className={`description ${Styles.cardDescription}`}>{description}</p>
      <p className={Styles.date}>Abril 2021 · actual</p>
    </div>
  )
}
