import { useContext } from 'react'
import styles from './darkModeBtn.module.css'
import { ThemeContext } from '@/context/ThemeContext'

const DarkModeBtn = () => {
    const {mode, toggle} = useContext(ThemeContext)
    return (
        <div className={styles.btn} onClick={() => toggle()}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div className={styles.ball} style={mode === 'dark' ? {left: "2px"}: {right: '2px'}} />
        </div>
    )
}

export default DarkModeBtn