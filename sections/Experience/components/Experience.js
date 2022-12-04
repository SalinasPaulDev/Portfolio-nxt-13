import React from 'react'
import { Card } from '../../../components/Card/Card'
import Ticket from '../../../components/Ticket/Ticket'
import Styles from '../../../styles/Experience.module.css'

export const Experience = () => {
  return (
    <div className='sectionLine'>
      <div className={Styles.container}>
        <Ticket text='🧷 Experiencia' style={{ marginBottom: '2rem' }} size='small' />
        <h2 className='subtitle' style={{ textAlign: 'center' }}>Trayectoria</h2>
        <div className={Styles.content}>
          <div>
            <h2 className='subtitle'>Area Profesional</h2>
            <p className='description'>2021 · actual</p>
            <Card actual />
            <Card />
            <Card />
          </div>
          <div>
            <h2 className='subtitle'>Academica</h2>
            <p className='description'>2020 · actual</p>
            <Card actual />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
