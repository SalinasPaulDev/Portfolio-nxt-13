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
          <Ticket text='👋 Saludos! ' />
          <h1 className={headerStyle.title}>Brian Paul Salinas Jara</h1>
          <p className={headerStyle.subtitle}>Front-end developer</p>
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
          <Link href='https://drive.google.com/file/d/1SOXPdGcdb2bgNgd8L1NN50oGqLf8K2MM/view?usp=sharing' target='_blank' rel='noreferrer'>
            <div className={headerStyle.downloadMessage}>
              <p>Bajar CV</p>
              <ArrowDown />
            </div>
          </Link>
          <Button data={buttonProps} />
        </div>
      </div>
    </>
  )
}

export default Header
