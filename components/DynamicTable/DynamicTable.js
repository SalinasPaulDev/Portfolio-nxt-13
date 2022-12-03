import React from 'react'
import Styles from '../../styles/DynamicTable.module.css'
import Ticket from '../Ticket/Ticket'
import Img from '../../public/img/testBackgroundImage.jpg'
import Image from 'next/image'

export const DynamicTable = ({ projects = [] }) => {
  return (
    <div className={Styles.container}>
      {projects.map(project => (
        <Card key={project.title} project={project} />
      ))}

    </div>
  )
}

const Card = ({ project }) => {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.content}>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <Ticket text='Typescript' size='small' />
        <Image src={Img} alt='project-img' className={Styles.img} />
      </div>

    </div>
  )
}
