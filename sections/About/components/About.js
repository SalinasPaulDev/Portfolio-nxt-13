import Image from 'next/image'
import React from 'react'
import Ticket from '../../../components/Ticket/Ticket'
import styles from '../../../styles/About.module.css'

export const About = () => {
  return (
    <div className={styles.content}>
      <div className={styles.photo}>
        <Image src='https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj' alt='user' width={50} height={50} />
      </div>
      <div className={styles.aboutData}>
        <Ticket text='🧐 Sobre mi' />
        <p>
          <span>👋 Me llamo Brian Paul Salinas Jara pero podes normalmente me llaman Brai o Paul </span>
          <span>👨‍🎓 Actualmente estudio en la facultad de ingenieria de Lomas de Zamora la tecnicatura en Programacion de computadoras</span>
          <span>👨‍💻 con mas de 2 años programando con tecnologias como JavaScript, React y Typescript </span>
          <span>💡 Me interesan el desarrollo front-end utilizando React/React Native y las posibilidades para aprender nuevas tecnologias </span>
        </p>
      </div>
    </div>
  )
}
