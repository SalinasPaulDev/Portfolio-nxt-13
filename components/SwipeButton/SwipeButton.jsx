import { useEffect, useState } from 'react'
import styles from '../../styles/SwipeButton.module.css'

export const SwipeButton = () => {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setHidden(true)
    }, 5000)
  }, [])
  return (
    <div className={`${styles.content} ${hidden ? styles.hidden : ''}`}>
      <div>
        <p className={styles.text}>Swipe</p>
      </div>
      <div className={styles.container}>
        <div className={styles.ball} />
      </div>
    </div>
  )
}
