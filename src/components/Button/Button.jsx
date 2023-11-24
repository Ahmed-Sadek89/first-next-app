import Link from 'next/link'
import styles from './Button.module.css'

const Button = ({link, text}) => {
  return (
    <Link href={link}>
        <button className={styles.button}>{text}</button>
    </Link>
  )
}

export default Button