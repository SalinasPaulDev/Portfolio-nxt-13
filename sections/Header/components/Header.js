'use client'
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
      <div className={headerStyle.container}>
        <div>
          <Ticket text='👋 Saludos! ' />
          <h1 className={headerStyle.title}>Brian Paul Salinas Jara</h1>
          <p className={headerStyle.subtitle}>Front-end developer</p>
          <div className={headerStyle.icons}>
            <div>
              <LinkedinIcon />
            </div>
            <div>
              <GithubIcon />
            </div>
          </div>
        </div>
        <div className={headerStyle.contentDownload}>
          <div className={headerStyle.downloadMessage}>
            <p>Bajar CV</p>
            <ArrowDown />
          </div>
          <Button data={buttonProps} />
        </div>
      </div>
    </>
  )
}

export default Header
