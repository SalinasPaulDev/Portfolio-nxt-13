import React from 'react'
import styles from '../../styles/Button.module.css'

const Button = ({ data, style, textStyle }) => {
  return (
    <div className={styles.buttonBody} style={style}>
      <div className={styles.buttonIcon}>{data.icon || ''}</div>
      <div className={styles.buttonText} style={textStyle}>{data.text || ''}</div>
    </div>
  )
}
export default Button
