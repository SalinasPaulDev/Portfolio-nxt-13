import React from 'react'
import { Card } from '../../../components/Card/Card'
import Ticket from '../../../components/Ticket/Ticket'
import { getExperience } from '../../../firestore/client'
import Styles from '../../../styles/Experience.module.css'

const getExperienceData = () => {
  return getExperience()
}
export const Experience = async () => {
  const experience = await getExperienceData()

  return (
    <div className='sectionLine' id='experience'>
      <div className={Styles.container}>
        <Ticket text='🧷 Experiencia' style={{ marginBottom: '2rem' }} size='small' />
        <h2 className='subtitle' style={{ textAlign: 'center' }}>Trayectoria</h2>
        <div className={Styles.content}>
          <div>
            <h2 className='subtitle'>Area Profesional</h2>
            <p className='description'>2021 · actual</p>
            {
              experience.professionalList.map((item) => (
                <Card key={item.title} actual title={item.title} description={item.description} />
              ))
            }

          </div>
          <div>
            <h2 className='subtitle'>Academica</h2>
            <p className='description'>2020 · actual</p>
            {
              experience.experienceList.map((item) => (
                <Card key={item.title} actual title={item.title} description={item.description} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
