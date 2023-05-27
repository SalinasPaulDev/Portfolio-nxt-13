import React from 'react'
import Styles from '../../styles/DynamicTable.module.css'
import Ticket from '../Ticket/Ticket'
import Img from '../../public/img/testBackgroundImage.jpg'
import Image from 'next/image'
import Button from '../../components/Button/Button'
import WspIcon from '../icons/Wsp'
import GithubIcon from '../icons/Github'
import GithubOutline from '../icons/Github-outline'
import WebIcon from '../icons/Web'
import Link from 'next/link'

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
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
          {project.labels.map((label) => (
            <Ticket key={label} text={label} size='small' />
          ))}
        </div>
        <Image
          src={project.img}
          alt='project-img'
          className={Styles.img}
          width={100}
          height={100}
        />
      </div>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
        <Link href='https://www.google.com'>
          <Button
            data={githubButtonProps}
            style={{ height: '30px', alignItems: 'center', width: '100px' }}
            textStyle={{ fontSize: '12px' }}
          />
        </Link>
        <Link href='https://www.youtube.com'>
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
