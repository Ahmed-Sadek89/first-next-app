import Button from '@/components/Button/Button';
import styles from './home.module.css';
import Image from "next/image";
import hero from 'public/hero.png'

export const metadata = {
  title: "lamamia homepage",
  description: "this is lamamia homepage"
}

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_content}>
        <h1 className={styles.home_content_title}>
          Better design for your digital products.
        </h1>
        <p className={styles.home_content_p}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button link={'/portfolio'} text={'see our works'} />
      </div>
      <div className={styles.home_image}>
        <Image placeholder='empty' src={hero} className={styles.home_image_img} alt='home' />
      </div>
    </div>
  )
}
