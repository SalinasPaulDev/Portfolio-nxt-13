import React from 'react'
import Styles from '../../styles/Card.module.css'

export const Card = ({ actual = false }) => {
  return (
    <div className={`${Styles.cardContainer} ${actual && Styles.actual}`}>
      <h4>SpaceGuru</h4>
      <p className={`description ${Styles.cardDescription}`}>Desenvolvimento de features na aplicação principal e site. com React Js e Typescript, além do auxíllio de outras tecnologias como Next, Styled Components e padrões de arquitetura. </p>
      <p className={Styles.date}>Abril 2021 · actual</p>
    </div>
  )
}
