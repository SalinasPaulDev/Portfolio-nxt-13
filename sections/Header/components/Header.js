'use client'
import Link from 'next/link'
import Button from '../../../components/Button/Button'
import ArrowDown from '../../../components/icons/ArrowDown'
import GithubIcon from '../../../components/icons/Github'
import LinkedinIcon from '../../../components/icons/Linkedin'
import WspIcon from '../../../components/icons/Wsp'
import Navbar from '../../../components/Navbar/Navbar'
import Ticket from '../../../components/Ticket/Ticket'
import headerStyle from '../../../styles/Header.module.css'
import { SwipeButton } from '../../../components/SwipeButton/SwipeButton'

const Header = () => {
  const buttonProps = {
    icon: <WspIcon />,
    text: 'Vamos a conversar'
  }

  return (
    <>
      <Navbar />
      <div className={headerStyle.container} id='header'>
        <div>
          <div className={headerStyle.ticket}>
            <Ticket text='👋 Saludos! ' />
          </div>
          <h1 className={headerStyle.title}>Brian Paul Salinas Jara</h1>
          <p className={headerStyle.subtitle}>Full-stack developer</p>
          <div className={headerStyle.icons}>
            <Link href='https://www.linkedin.com/in/brian-pauldev/'>
              <LinkedinIcon />
            </Link>
            <Link href='https://github.com/SalinasPaulDev'>
              <GithubIcon />
            </Link>
          </div>
        </div>
        <div className={headerStyle.contentDownload}>
          <a
            href='https://drive.google.com/file/d/1oLbqQPS0inL6qtF-JoTAKVk6EBCi_DbN/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <div className={headerStyle.downloadMessage}>
              <p>Descargar CV</p>
              <ArrowDown />
            </div>
          </a>
          <a href='https://api.whatsapp.com/send?phone=524423797173' target='_blank' rel='noreferrer'>
            <Button data={buttonProps} />
          </a>
        </div>
      </div>
      <SwipeButton />
    </>
  )
}

export default Header
