import React from 'react'
import Styles from '../../styles/Card.module.css'
import { formatDate } from '../../utils'

export const Card = ({ actual, title, description, startDate, endDate = 0 }) => {
  return (
    <div className={`${Styles.cardContainer} ${actual && Styles.actual}`}>
      <h4>{title}</h4>
      <p className={`description ${Styles.cardDescription}`}>{description}</p>
      <div className={Styles.date}>
        {startDate && (<p>{formatDate(startDate)}</p>)}
        -
        {endDate ? (<p>{formatDate(endDate)}</p>) : (<p>Actual</p>)}
      </div>
    </div>
  )
}
