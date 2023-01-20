import React from 'react'
import '../../../styles/globals.css'
import Ticket from '../../../components/Ticket/Ticket'
import { DynamicTable } from '../../../components/DynamicTable/DynamicTable'
import Styles from '../../../styles/Projects.module.css'
import { getProjects } from '../../../firestore/client'

const getDataProjects = () => {
  return getProjects()
}

export const Projects = async () => {
  const projects = await getDataProjects()

  return (
    <div className='sectionLine' style={{ width: '100%', margin: 'auto', minHeight: '100vh', padding: '3rem auto' }} id='project'>
      <Ticket text='⛓️ Portfolio' />
      <h2 className='subtitle'>Trabajos y Projectos</h2>
      <div className={Styles.table}>
        <DynamicTable projects={projects} />
      </div>

    </div>
  )
}
