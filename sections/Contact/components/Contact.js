'use client'
import Link from 'next/link'
import React from 'react'
import Button from '../../../components/Button/Button'
import { CopyButton } from '../../../components/CopyButton/CopyButton'
import EmailIcon from '../../../components/icons/EmailIcon'
import WspIcon from '../../../components/icons/Wsp'
import Ticket from '../../../components/Ticket/Ticket'
import Styles from '../../../styles/Contact.module.css'

export const Contact = () => {
  const buttonProps = {
    icon: <WspIcon />,
    text: 'Vamos a conversar'
  }
  return (
    <div className='sectionLine' id='contact'>
      <div className={Styles.container}>
        <Ticket text='📫 Contacto' />
        <h2 className='subtitle'>Vamos a conversar!</h2>
        <div className={Styles.content}>
          <Button data={buttonProps} />
          <div className={Styles.emailContent}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <EmailIcon />
              <p>E-mail: </p>
            </div>

            <CopyButton id='copyEmail'>
              <p>salinaspaul.dev@gmail.com</p>
            </CopyButton>

          </div>
        </div>
      </div>
    </div>
  )
}
