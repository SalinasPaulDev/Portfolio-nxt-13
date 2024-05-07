import Image from 'next/image'
import React from 'react'
import Ticket from '../../../components/Ticket/Ticket'
import styles from '../../../styles/About.module.css'
import User from '../../../public/img/redondeada.png'
import '../../../styles/globals.css'

export const About = () => {
  return (
    <div className='sectionLine'>
      <div className={styles.content} id='about'>
        <div className={styles.photo}>
          <Image
            src={User} alt='user' width={260} height={340} style={{
              maskImage: 'linear-gradient(black 80% , transparent), linear-gradient(to left, black, transparent)'
            }}
          />
        </div>
        <div className={styles.aboutData}>
          <div className={styles.ticket}>
            <Ticket text='🧐 Sobre mi' />
          </div>
          <p>
            <span>👋 Me llamo Brian Paul Salinas Jara pero podes decirme Brai o Paul </span>
            <span>👨‍🎓 Actualmente estudio en la Facultad de Ingenieria de Lomas de Zamora la Tecnicatura en Programacion de computadoras</span>
            <span>👨‍💻 Con mas de 2 años programando con tecnologias como React, React Native y Typescript para Front End y NodeJS, MySQL y MongoDB para el Back End y Base de datos </span>
            <span>💡 Me interesan el desarrollo Front-end utilizando React/React Native, las posibilidades para aprender nuevas tecnologias y aportar ideas dentro de mi equipo de trabajo</span>
            <span>🎯 Mi objetivo actual es seguir estudiando Python para fortalecer y ampliar mis conocimientos</span>
          </p>
        </div>
      </div>
    </div>
  )
}
