import React from 'react'
import '../../../styles/globals.css'
import Ticket from '../../../components/Ticket/Ticket'
import { DynamicTable } from '../../../components/DynamicTable/DynamicTable'
import Styles from '../../../styles/Projects.module.css'

const projects = [
  {
    title: 'counter',
    description: 'asdasdasd asd asd asd asd asd asd asd asd asd'
  },
  {
    title: 'test',
    description: 'asdasdasd asd asd asd asd asd asd asd asd asd'
  },
  {
    title: 'portfolio',
    description: 'asdasdasd asd asd asd asd asd asd asd asd asd'
  },
  {
    title: 'counter',
    description: 'asdasdasd asd asd asd asd asd asd asd asd asd'
  },
  {
    title: 'test',
    description: 'asdasdasd asd asd asd asd asd asd asd asd asd'
  },
  {
    title: 'portfolio',
    description: 'asdasdasd asd asd asd asd asd asd asd asd asd'
  }
]
export const Projects = () => {
  return (
    <div className='sectionLine'>
      <Ticket text='⛓️ Portfolio' />
      <h2 className='subtitle'>Trabajos y Projectos</h2>
      <div className={Styles.table}>
        <DynamicTable projects={projects} />
      </div>

    </div>
  )
}
