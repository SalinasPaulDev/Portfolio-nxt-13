import React from 'react'
import Styles from '../../styles/DynamicTable.module.css'
import Ticket from '../Ticket/Ticket'
import Image from 'next/image'
import Button from '../../components/Button/Button'
import GithubOutline from '../icons/Github-outline'
import WebIcon from '../icons/Web'
import Link from 'next/link'
import { truncateText } from '../../utils'

export const DynamicTable = ({ projects = [] }) => {
  return (
    <div className={Styles.container}>
      {projects.map((project) => (
        <Card key={project.title} project={project} />
      ))}
    </div>
  )
}

const githubButtonProps = {
  icon: <GithubOutline />,
  text: 'Github'
}

const websiteButtonProps = {
  icon: <WebIcon />,
  text: 'Website'
}

const Card = ({ project }) => {
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.content}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <h3 style={{ fontSize: '22px' }}>{project.title}</h3>
          <div>
            <p>
              {truncateText(project.description)}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {project.labels.map((label) => (
              <Ticket key={label} text={label} size='small' />
            ))}
          </div>
        </div>
        <Image
          src={project.img}
          alt='project-img'
          className={Styles.img}
          width={247}
          height={165}
        />
      </div>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <Link href={project.githubUrl}>
          <Button
            data={githubButtonProps}
            style={{ height: '30px', alignItems: 'center', width: '100px' }}
            textStyle={{ fontSize: '12px' }}
          />
        </Link>
        <Link href={project.webUrl}>
          <Button
            data={websiteButtonProps}
            textStyle={{ fontSize: '12px' }}
            style={{ height: '30px', alignItems: 'center', width: '100px' }}
          />
        </Link>
      </div>
    </div>
  )
}
